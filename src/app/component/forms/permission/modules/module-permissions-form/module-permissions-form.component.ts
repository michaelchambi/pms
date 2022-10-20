import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { VariableService } from '../../../../../service/public/variable.service';
import { PermissionsService } from '../../../../../service/permissions/permissions.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-module-permissions-form',
  templateUrl: './module-permissions-form.component.html',
  styleUrls: ['./module-permissions-form.component.css']
})
export class ModulePermissionsFormComponent implements OnInit {
  id: any;
  modules: any;
  role_module: any;
  role_submodule: any = [];
  role_action: any = [];
  message: any;

  data: {
    roleId: any;
    moduleId: number[];
    sub_moduleId: number[];
    actionId: number[];
  } = {
      roleId: '',
      moduleId: [],
      sub_moduleId: [],
      actionId: []
    };

  constructor(
    public variable: VariableService,
    private permission: PermissionsService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.rolePermissions(this.activeRoute.snapshot.paramMap.get('id'));
  }

  rolePermissions(id: any) {
    this.permission.getRolePermissions(id).subscribe(
      (res) => {
        this.role_module = res.permissions;

        this.permissions();
      },
      (err) => {
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }

  permissions() {
    this.permission.showPermissions().subscribe(
      (res) => {
        this.modules = res.Links;
        this.modules.forEach((module_permission: any) => {
          this.role_module.forEach((current: any) => {
            if (module_permission.id == current.id) {
              module_permission.checked = true;
            }
          });
        });

        this.modules.forEach((sub_module: any) => {
          sub_module.pms_sub_modules.forEach((subPermission: any) => {
            this.role_module.forEach((current_sub: any) => {
              current_sub.pms_sub_modules.forEach((current: any) => {
                if (subPermission.id == current.id) {
                  subPermission.checked = true;
                  this.role_submodule.push(current);
                }
              });
            });
          });
        });

        this.modules.forEach((module_submodule: any) => {
          module_submodule.pms_sub_modules.forEach((sub_action: any) => {
            sub_action.pms_sub_module_actions.forEach((action: any) => {
              this.role_module.forEach((current_action: any) => {
                current_action.pms_sub_module_actions.forEach((current: any) => {
                  if (action.id === current.id) {
                    action.checked = true;
                    this.role_action.push(current);
                  }
                });
              });
            });
          });
        });
      },
      (err) => {
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }

  moduleChangeCheck($event: any, val: any) {
    const checked = $event.target.checked;
    if (checked) {
      this.role_module.push(val);
    } else {
      var permissions = _.remove(this.role_module, function (permitted_permissions: any) {
        return permitted_permissions.id != val.id;
      });

      this.role_module = permissions;
      console.log('Module', this.role_module);
    }
  }

  subModuleChangeCheck($event: any, val: any) {
    const checked = $event.target.checked;
    if (checked) {
      this.role_submodule.push(val);
    } else {
      var permissions = _.remove(this.role_submodule, function (permitted_permissions: any) {
        return permitted_permissions.id != val.id;
      });

      console.log('sub', this.role_submodule);

      this.role_submodule = permissions;
    }
  }

  actionChangeCheck($event: any, val: any) {
    const checked = $event.target.checked;
    if (checked) {
      this.role_action.push(val);
    } else {
      var permissions = _.remove(this.role_action, function (permitted_permissions: any) {
        return permitted_permissions.id != val.id;
      });
      this.role_action = permissions;
    }
  }

  updatePermission() {
    this.data.roleId = this.activeRoute.snapshot.paramMap.get('id');
    let module_id: any = [];
    let submodule_id: any = [];
    let action_id: any = [];

    //Capture selected modules on permission
    this.role_module.forEach((modulePermission: any) => {
      module_id.push(modulePermission.id);
    });
    this.data.moduleId = module_id;

    //capture selected Sub modules on permission
    this.role_submodule.forEach((submodulePermission: any) => {
      submodule_id.push(submodulePermission.id);
    });
    this.data.sub_moduleId = submodule_id;

    // capture selected action on this.permission
    this.role_action.forEach((actionPermissions: any) => {
      action_id.push(actionPermissions.id);
    });
    this.data.actionId = action_id;

    this.permission.updatePermission(this.data).subscribe(
      (res) => {
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        this.variable.appSuccess = true;
        this.variable.successMessage = res.message;
        this.router.navigate(['/module-permissions/' + this.id]);
      },
      (err) => {
        this.variable.appError = true;
        this.variable.errorMessage = err.error.message;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }

  // end of file
}
