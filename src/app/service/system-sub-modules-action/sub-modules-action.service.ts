import { Injectable } from '@angular/core';
import * as _ from "lodash";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VariableService } from '../public/variable.service';
import { GeneralService } from '../general/general.service';
import { UsersService } from '../users/users.service';
import { PermissionsService } from '../permissions/permissions.service';

@Injectable({
  providedIn: 'root'
})
export class SubModulesActionService {

  private url = this.variable.API_URL + 'submoduleAction';
  token: any;
  userId: any;
  value = {
    id: ''
  }
  data: { sub_moduleId: any, roles: number[] } = {
    sub_moduleId: '',
    roles: []
  }
  actionPerm: any;
  actionList: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private general: GeneralService,
    public variable: VariableService,
    private user: UsersService,
    private permission: PermissionsService
  ) { }

  addSubmoduleAction(data: any) {
    return this.http.post<any>(`${this.url}/addAction`, data, { headers: this.general.userAuthorization() });
  }

  getSubmoduleActions() {
    return this.http.get<any>(`${this.url}/submoduleAction`, { headers: this.general.userAuthorization() });
  }

  showSubmoduleAction(id: any) {
    return this.http.get<any>(`${this.url}/submoduleAction/show/${id}`, { headers: this.general.userAuthorization() });
  }

  editSubmoduleAction(id: any, data: any) {
    return this.http.post<any>(`${this.url}/editAction/${id}`, data, { headers: this.general.userAuthorization() });
  }

  deactivateSubmoduleAction(id: any) {
    return this.http.post<any>(`${this.url}/deactivateAction`, id, { headers: this.general.userAuthorization() });
  }

  activateSubmoduleAction(id: any) {
    return this.http.post<any>(`${this.url}/activateAction`, id, { headers: this.general.userAuthorization() });
  }


  userRoles(id: any) {
    this.userId = localStorage.getItem('id');
    this.data.sub_moduleId = id;
    this.value.id = this.userId;

    this.user.userRoles(this.userId).subscribe(
      res => {

        res.forEach((role: any) => {
          this.data.roles.push(role.roleId);
        });

        this.actionPermissions(this.data);
      },
      err => {
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }


  actionPermissions(data: any) {
    this.permission.actionPermissions(data).subscribe(
      res => {
        this.actionPerm = res;

        this.getSubmoduleActions().subscribe(
          result => {
            this.actionList = result;

            this.actionPerm.forEach((action: any) => {
              let actionDetails = _.map(this.actionList, function (actionData: any) {
                if (action.DISTINCT == actionData.id) {
                  return actionData;
                }
              });
              actionDetails = _.without(actionDetails, undefined);
              action.details = actionDetails;

            });

            return this.actionPerm;
          },

          error => {
            if (error.error.token == 0) {
              localStorage.setItem('token', error.error.token);
            }
          }


        );


      },

      err => {
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );

  }


}
