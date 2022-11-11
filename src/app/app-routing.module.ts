import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './component/auth/reset-password/reset-password.component';
import { LoginComponent } from './component/auth/login/login.component';
import { AdminDashboardComponent } from './component/dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/dashboard/user-dashboard/user-dashboard.component';
import { ViewUsersComponent } from './component/administration/user-administration/users/view-users/view-users.component';
import { EditUsersComponent } from './component/administration/user-administration/users/edit-users/edit-users.component';
import { AddUsersComponent } from './component/administration/user-administration/users/add-users/add-users.component';
import { AuthGuard } from './service/auth/auth.guard';
import { ViewUserDetailsComponent } from './component/administration/user-administration/users/view-user-details/view-user-details.component';
import { ForgotPasswordComponent } from './component/auth/forgot-password/forgot-password.component';
import { ActivateAccountComponent } from './component/auth/activate-account/activate-account.component';
import { ViewProfileComponent } from './component/administration/profile-administration/view-profile/view-profile.component';
import { AddProfileComponent } from './component/administration/profile-administration/add-profile/add-profile.component';
import { EditProfileComponent } from './component/administration/profile-administration/edit-profile/edit-profile.component';
import { ViewRolesComponent } from './component/administration/role-administration/view-roles/view-roles.component';
import { AddRolesComponent } from './component/administration/role-administration/add-roles/add-roles.component';
import { EditRolesComponent } from './component/administration/role-administration/edit-roles/edit-roles.component';
import { ViewRoomComponent } from './component/administration/court-administration/rooms/view-room/view-room.component';
import { AddRoomComponent } from './component/administration/court-administration/rooms/add-room/add-room.component';
import { EditRoomComponent } from './component/administration/court-administration/rooms/edit-room/edit-room.component';
import { ViewModuleComponent } from './component/administration/permission-administration/modules/view-module/view-module.component';
import { AddModuleComponent } from './component/administration/permission-administration/modules/add-module/add-module.component';
import { EditModuleComponent } from './component/administration/permission-administration/modules/edit-module/edit-module.component';
import { ViewFloorComponent } from './component/administration/court-administration/floors/view-floor/view-floor.component';
import { AddFloorComponent } from './component/administration/court-administration/floors/add-floor/add-floor.component';
import { EditFloorComponent } from './component/administration/court-administration/floors/edit-floor/edit-floor.component';
import { ViewSubModuleComponent } from './component/administration/permission-administration/sub-modules/view-sub-module/view-sub-module.component';
import { AddSubModuleComponent } from './component/administration/permission-administration/sub-modules/add-sub-module/add-sub-module.component';
import { EditSubModuleComponent } from './component/administration/permission-administration/sub-modules/edit-sub-module/edit-sub-module.component';
import { ViewSubModuleActionComponent } from './component/administration/permission-administration/sub-module-actions/view-sub-module-action/view-sub-module-action.component';
import { AddSubModuleActionComponent } from './component/administration/permission-administration/sub-module-actions/add-sub-module-action/add-sub-module-action.component';
import { EditSubModuleActionComponent } from './component/administration/permission-administration/sub-module-actions/edit-sub-module-action/edit-sub-module-action.component';
import { ModulePermissionsComponent } from './component/administration/permission-administration/role-permission/module-permissions/module-permissions.component';
import { ViewAppConfigurationComponent } from './component/app-configuration/view-app-configuration/view-app-configuration.component';
import { AddAppConfigurationComponent } from './component/app-configuration/add-app-configuration/add-app-configuration.component';
import { EditAppConfigurationComponent } from './component/app-configuration/edit-app-configuration/edit-app-configuration.component';
import { ViewCategoriesComponent } from './component/administration/categories-administration/view-categories/view-categories.component';
import { AddCategoriesComponent } from './component/administration/categories-administration/add-categories/add-categories.component';
import { EditCategoriesComponent } from './component/administration/categories-administration/edit-categories/edit-categories.component';
import { ViewItemsComponent } from './component/administration/projects-administration/view-items/view-items.component';
import { AddItemsComponent } from './component/administration/projects-administration/add-items/add-items.component';
import { EditItemsComponent } from './component/administration/projects-administration/edit-items/edit-items.component';
import { ViewItemDetailsComponent } from './component/administration/projects-administration/view-item-details/view-item-details.component';
import { ViewEditedItemDetailsComponent } from './component/administration/projects-administration/view-edited-item-details/view-edited-item-details.component';
import { ViewPaymentComponent } from './component/administration/Payment-Adminstration/View/view-payment/view-payment.component';
import { ViewExtensionComponent } from './component/administration/Extension-Adminstration/View/view-extension/view-extension.component';
import { AddExtensionComponent } from './component/administration/Extension-Adminstration/Add/add-extension/add-extension.component';
import { EditExtensionFormComponent } from './component/forms/Extension-Time-Forms/Edit-Extension-forms/edit-extension-form/edit-extension-form.component';
import { TimeExtensionDetailedViewComponent } from './component/views/Time-Extension/time-extension-detailed-view/time-extension-detailed-view.component';
import { AddImplementationPlanComponent } from './component/administration/Implementation-Plan-Adminstration/Add/add-implementation-plan/add-implementation-plan.component';
import { EditImplementationPlanComponent } from './component/administration/Implementation-Plan-Adminstration/Edit/edit-implementation-plan/edit-implementation-plan.component';
import { ViewImplementationPlanComponent } from './component/administration/Implementation-Plan-Adminstration/View/view-implementation-plan/view-implementation-plan.component';
import { ViewUserProfileComponent } from './component/administration/User-Profile-view-Adminstration/View/view-user-profile/view-user-profile.component';
import { ViewTaskAdminComponent } from './component/administration/Task-Adminstration/View/view-task-admin/view-task-admin.component';
import { AddTaskAdminComponent } from './component/administration/Task-Adminstration/Add/add-task-admin/add-task-admin.component';
import { EditTaskAdminComponent } from './component/administration/Task-Adminstration/Edit/edit-task-admin/edit-task-admin.component';





const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  //======================================================================================
  // USERS MANAGEMENT ROUTES
  //======================================================================================
  { path: 'reset-password/:id', component: ResetPasswordComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: 'view-users/:id', component: ViewUsersComponent, canActivate: [AuthGuard] },
  { path: 'add-users/:id', component: AddUsersComponent, canActivate: [AuthGuard] },
  { path: 'view-user-details/:id/:id2', component: ViewUserDetailsComponent, canActivate: [AuthGuard] },
  { path: 'edit-users/:id/:id2', component: EditUsersComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'activate-account', component: ActivateAccountComponent },

  //======================================================================================
  // PROFILE MANAGEMENT ROUTES
  //======================================================================================
  { path: 'profile/:id', component: ViewProfileComponent, canActivate: [AuthGuard] },
  { path: 'add-profile/:id', component: AddProfileComponent, canActivate: [AuthGuard] },
  { path: 'edit-profile/:id/:id2', component: EditProfileComponent, canActivate: [AuthGuard] },

  //======================================================================================
  // ROLES MANAGEMENT ROUTES
  //======================================================================================
  { path: 'roles/:id', component: ViewRolesComponent, canActivate: [AuthGuard] },
  { path: 'add-role/:id', component: AddRolesComponent, canActivate: [AuthGuard] },
  { path: 'edit-role/:id/:id2', component: EditRolesComponent, canActivate: [AuthGuard] },

  //======================================================================================
  // ROOMS MANAGEMENT ROUTES
  //======================================================================================
  { path: 'rooms/:id', component: ViewRoomComponent, canActivate: [AuthGuard] },
  { path: 'add-room/:id', component: AddRoomComponent, canActivate: [AuthGuard] },
  { path: 'edit-room/:id/:id2', component: EditRoomComponent, canActivate: [AuthGuard] },

  //======================================================================================
  // FLOORS MANAGEMENT ROUTES
  //======================================================================================
  { path: 'department/:id', component: ViewFloorComponent, canActivate: [AuthGuard] },
  { path: 'add-department/:id', component: AddFloorComponent, canActivate: [AuthGuard] },
  { path: 'edit-department/:id/:id2', component: EditFloorComponent, canActivate: [AuthGuard] },

  //======================================================================================
  // MODULES MANAGEMENT ROUTES
  //======================================================================================
  { path: 'modules/:id', component: ViewModuleComponent, canActivate: [AuthGuard] },
  { path: 'add-module/:id', component: AddModuleComponent, canActivate: [AuthGuard] },
  { path: 'edit-module/:id/:id2', component: EditModuleComponent, canActivate: [AuthGuard] },
  { path: 'module-submodule/:id/:id2', component: ViewSubModuleComponent, canActivate: [AuthGuard] },


  //======================================================================================
  // SUB MODULES MANAGEMENT ROUTES
  //======================================================================================
  { path: 'add-sub-module/:id/:id2', component: AddSubModuleComponent, canActivate: [AuthGuard] },
  { path: 'edit-sub-module/:id/:id2', component: EditSubModuleComponent, canActivate: [AuthGuard] },
  { path: 'sub-module-action/:id/:id2', component: ViewSubModuleActionComponent, canActivate: [AuthGuard] },

  //======================================================================================
  // SUB MODULES ACTION MANAGEMENT ROUTES
  //======================================================================================
  { path: 'add-sub-module-action/:id/:id2', component: AddSubModuleActionComponent, canActivate: [AuthGuard] },
  { path: 'edit-sub-module-action/:id/:id2', component: EditSubModuleActionComponent, canActivate: [AuthGuard] },


  //======================================================================================
  // PERMISSION MANAGEMENT ROUTES
  //======================================================================================
  // { path: 'role-permission/:id', component: UpdateRolePermissionComponent, canActivate:[AuthGuard]},
  { path: 'role-permission/:id', component: ModulePermissionsComponent, canActivate: [AuthGuard] },
  { path: 'module-permissions/:id', component: ModulePermissionsComponent, canActivate: [AuthGuard] },

  //======================================================================================
  //USER PROFILE ROUTES
 //======================================================================================
 { path: 'profile-view/:id', component: ViewUserProfileComponent  , canActivate: [AuthGuard] },


  //======================================================================================
  // APP CONFIGURATION ROUTES
  //======================================================================================
  { path: 'app-config/:id', component: ViewAppConfigurationComponent, canActivate: [AuthGuard] },
  { path: 'add-app-config/:id', component: AddAppConfigurationComponent, canActivate: [AuthGuard] },
  { path: 'edit-app-config/:id/:id2', component: EditAppConfigurationComponent, canActivate: [AuthGuard] },

  
  //======================================================================================
  // IMPLEMENTATION  ROUTES
  //======================================================================================


  //======================================================================================
  // CHINESE CATEGORIES ROUTES
  //======================================================================================
  { path: 'project-category/:id', component: ViewCategoriesComponent, canActivate: [AuthGuard] },
  { path: 'add-categories/:id', component: AddCategoriesComponent, canActivate: [AuthGuard] },
  { path: 'edit-categories/:id/:id2', component: EditCategoriesComponent, canActivate: [AuthGuard] },

 
  //======================================================================================
  // CHINESE PROJECT ROUTES
  //======================================================================================
  { path: 'projects/:id', component: ViewItemsComponent, canActivate: [AuthGuard] },
  { path: 'projects/:id/:id2', component: ViewItemsComponent, canActivate: [AuthGuard] },
  { path: 'add-projects/:id', component: AddItemsComponent, canActivate: [AuthGuard] },
  { path: 'edit-project/:id/:id2', component: EditItemsComponent, canActivate: [AuthGuard] },
  { path: 'view-project-details/:id/:id2', component: ViewItemDetailsComponent, canActivate: [AuthGuard] },
  { path: 'view-project-details/:id/:id2', component: ViewEditedItemDetailsComponent, canActivate: [AuthGuard] },

  //======================================================================================
  //IMPLEMENTATION PLAN ROUTES
 //======================================================================================
 { path: 'plan/:id', component: ViewImplementationPlanComponent, canActivate: [AuthGuard] },
 { path: 'add_plan/:id', component: AddImplementationPlanComponent  , canActivate: [AuthGuard] },


     //======================================================================================
  //PAYMENTS ROUTES
 //======================================================================================
 { path: 'payments/:id', component: ViewPaymentComponent, canActivate: [AuthGuard] },
 //   { path: 'add_plan/:id', component: AddImplementationPlanComponent  , canActivate: [AuthGuard] },
 
   //======================================================================================
  //EXTENSION TIME ROOTES  
 //======================================================================================
 { path: 'project_extension/:id', component:   ViewExtensionComponent,canActivate: [AuthGuard] },
 { path: 'add_extension/:id', component: AddExtensionComponent, canActivate: [AuthGuard] },
 { path: 'edit_extension/:id', component:  EditExtensionFormComponent, canActivate: [AuthGuard] },
 { path: 'extenstion_Detailed_view/:id', component:  TimeExtensionDetailedViewComponent, canActivate: [AuthGuard] },

    //======================================================================================
  // TASK MANAGEMENT ROUTES
  //======================================================================================
  { path: 'task/:id', component: ViewTaskAdminComponent, canActivate: [AuthGuard] },
  { path: 'add_task/:id', component: AddTaskAdminComponent , canActivate: [AuthGuard] },
 
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
