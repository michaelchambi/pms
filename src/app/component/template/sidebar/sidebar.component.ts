import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { AuthService } from "../../../service/auth/auth.service";
import { PermissionsService } from "../../../service/permissions/permissions.service";
import { ModulesService } from "../../../service/system-modules/modules.service";
import { UsersService } from "../../../service/users/users.service";
import { SubModulesService } from "../../../service/system-sub-modules/sub-modules.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  modulePerm: any;
  moduleList: any;
  subModulePerm: any;
  subModuleList: any;
  userId: any;
  value = {
    id: "",
  };
  data: { roles: number[] } = {
    roles: [],
  };

  constructor(public auth: AuthService, private permission: PermissionsService, private modules: ModulesService, private sub_module: SubModulesService, private user: UsersService) { }

  ngOnInit(): void {
    this.userRoles();
  }

  userRoles() {
    this.userId = localStorage.getItem("id");
    this.value.id = this.userId;

    this.user.userRoles(this.userId).subscribe(
      (res) => {
        res.forEach((role: any) => {
          this.data.roles.push(role.roleId);
        });

        this.modulePermissions(this.data);
        this.subModulePermissions(this.data);
      },
      (err) => {
        if (err.error.token == 0) {
          localStorage.setItem("token", err.error.token);
        }
      }
    );
  }

  modulePermissions(data: any) {
    this.permission.modulePermissions(data).subscribe(
      (res) => {
        this.modulePerm = res;

        this.modules.getModules().subscribe(
          (result) => {
            this.moduleList = result;

            this.modulePerm.forEach((module: any) => {
              let moduleDetails = _.map(this.moduleList, function (moduleData: any) {
                if (module.DISTINCT == moduleData.id) {
                  return moduleData;
                }
              });
              moduleDetails = _.without(moduleDetails, undefined);
              module.details = moduleDetails;
            });

            return this.modulePerm;
          },

          (error) => {
            if (error.error.token == 0) {
              localStorage.setItem("token", error.error.token);
            }
          }
        );
      },

      (err) => {
        if (err.error.token == 0) {
          localStorage.setItem("token", err.error.token);
        }
      }
    );
  }

  subModulePermissions(data: any) {
    this.permission.subModulePermissions(data).subscribe(
      (res) => {
        this.subModulePerm = res;

        this.sub_module.getSubModules().subscribe(
          (result) => {
            this.subModuleList = result;

            this.subModulePerm.forEach((submodule: any) => {
              let subDetails = _.map(this.subModuleList, function (subData: any) {
                if (submodule.DISTINCT == subData.id) {
                  return subData;
                }
              });
              subDetails = _.without(subDetails, undefined);
              submodule.details = subDetails;
            });

            return this.subModulePerm;
          },

          (error) => {
            if (error.error.token == 0) {
              localStorage.setItem("token", error.error.token);
            }
          }
        );
      },

      (err) => {
        if (err.error.token == 0) {
          localStorage.setItem("token", err.error.token);
        }
      }
    );
  }
}
