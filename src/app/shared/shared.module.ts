import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ResetSessionComponent } from '../component/auth/session/reset-session/reset-session.component';
import { ResetPasswordFormComponent } from '../component/forms/auth/reset-password-form/reset-password-form.component';
import { LoginComponent } from '../component/auth/login/login.component';
import { ChangePasswordComponent } from '../component/auth/change-password/change-password.component';
import { ResetPasswordComponent } from '../component/auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from '../component/auth/forgot-password/forgot-password.component';
import { ForgotPasswordFormComponent } from '../component/forms/auth/forgot-password-form/forgot-password-form.component';
import { NavbarComponent } from '../component/template/navbar/navbar.component';
import { SidebarComponent } from '../component/template/sidebar/sidebar.component';
import { FooterComponent } from '../component/template/footer/footer.component';
import { AdminDashboardComponent } from '../component/dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from '../component/dashboard/user-dashboard/user-dashboard.component';
import { LoginFormComponent } from '../component/forms/auth/login-form/login-form.component';
import { LogoutComponent } from '../component/template/logout/logout.component';
import { ViewUsersComponent } from '../component/administration/user-administration/users/view-users/view-users.component';
import { AddUsersComponent } from '../component/administration/user-administration/users/add-users/add-users.component';
import { EditUsersComponent } from '../component/administration/user-administration/users/edit-users/edit-users.component';
import { EmptyFileComponent } from '../component/template/empty-file/empty-file.component';
import { ViewUserDetailsComponent } from '../component/administration/user-administration/users/view-user-details/view-user-details.component';
import { UsersDetailsComponent } from '../component/views/users/users-details/users-details.component';
import { UsersComponent } from '../component/views/users/users/users.component';
import { AddUserFormComponent } from '../component/forms/user/add-user-form/add-user-form.component';
import { EditUserFormComponent } from '../component/forms/user/edit-user-form/edit-user-form.component';
import { ActivateAccountComponent } from '../component/auth/activate-account/activate-account.component';
import { ActivateAccountFormComponent } from '../component/forms/auth/activate-account-form/activate-account-form.component';
import { AddRolesComponent } from '../component/administration/role-administration/add-roles/add-roles.component';
import { EditRolesComponent } from '../component/administration/role-administration/edit-roles/edit-roles.component';
import { ViewRolesComponent } from '../component/administration/role-administration/view-roles/view-roles.component';
import { AddRoleFormComponent } from '../component/forms/roles/add-role-form/add-role-form.component';
import { EditRoleFormComponent } from '../component/forms/roles/edit-role-form/edit-role-form.component';
import { RolesComponent } from '../component/views/roles/roles/roles.component';
import { AddRoomComponent } from '../component/administration/court-administration/rooms/add-room/add-room.component';
import { EditRoomComponent } from '../component/administration/court-administration/rooms/edit-room/edit-room.component';
import { ViewRoomComponent } from '../component/administration/court-administration/rooms/view-room/view-room.component';
import { RoomsComponent } from '../component/views/rooms/rooms/rooms.component';
import { AddRoomFormComponent } from '../component/forms/rooms/add-room-form/add-room-form.component';
import { EditRoomFormComponent } from '../component/forms/rooms/edit-room-form/edit-room-form.component';
import { ViewFloorComponent } from '../component/administration/court-administration/floors/view-floor/view-floor.component';
import { AddFloorComponent } from '../component/administration/court-administration/floors/add-floor/add-floor.component';
import { EditFloorComponent } from '../component/administration/court-administration/floors/edit-floor/edit-floor.component';
import { EditFloorFormComponent } from '../component/forms/department/edit-floor-form/edit-floor-form.component';
import { AddFloorFormComponent } from '../component/forms/department/add-floor-form/add-floor-form.component';
import { FloorsComponent } from '../component/views/floors/floors/floors.component';
import { ProfilesComponent } from '../component/views/profiles/profiles/profiles.component';
import { AddProfileComponent } from '../component/administration/profile-administration/add-profile/add-profile.component';
import { EditProfileComponent } from '../component/administration/profile-administration/edit-profile/edit-profile.component';
import { ViewProfileComponent } from '../component/administration/profile-administration/view-profile/view-profile.component';
import { EditProfileFormComponent } from '../component/forms/profiles/edit-profile-form/edit-profile-form.component';
import { AddProfileFormComponent } from '../component/forms/profiles/add-profile-form/add-profile-form.component';
import { AddModuleComponent } from '../component/administration/permission-administration/modules/add-module/add-module.component';
import { EditModuleComponent } from '../component/administration/permission-administration/modules/edit-module/edit-module.component';
import { ViewModuleComponent } from '../component/administration/permission-administration/modules/view-module/view-module.component';
import { AddSubModuleComponent } from '../component/administration/permission-administration/sub-modules/add-sub-module/add-sub-module.component';
import { EditSubModuleComponent } from '../component/administration/permission-administration/sub-modules/edit-sub-module/edit-sub-module.component';
import { ViewSubModuleComponent } from '../component/administration/permission-administration/sub-modules/view-sub-module/view-sub-module.component';
import { AddSubModuleActionComponent } from '../component/administration/permission-administration/sub-module-actions/add-sub-module-action/add-sub-module-action.component';
import { EditSubModuleActionComponent } from '../component/administration/permission-administration/sub-module-actions/edit-sub-module-action/edit-sub-module-action.component';
import { ViewSubModuleActionComponent } from '../component/administration/permission-administration/sub-module-actions/view-sub-module-action/view-sub-module-action.component';
import { ModulesComponent } from '../component/views/permission/modules/modules.component';
import { SubModulesComponent } from '../component/views/permission/sub-modules/sub-modules.component';
import { SubModuleActionComponent } from '../component/views/permission/sub-module-action/sub-module-action.component';
import { AddModuleFormComponent } from '../component/forms/permission/modules/add-module-form/add-module-form.component';
import { AddSubModuleFormComponent } from '../component/forms/permission/sub-modules/add-sub-module-form/add-sub-module-form.component';
import { EditModuleFormComponent } from '../component/forms/permission/modules/edit-module-form/edit-module-form.component';
import { EditSubModuleFormComponent } from '../component/forms/permission/sub-modules/edit-sub-module-form/edit-sub-module-form.component';
import { AddSubModuleActionFormComponent } from '../component/forms/permission/sub-module-actions/add-sub-module-action-form/add-sub-module-action-form.component';
import { EditSubModuleActionFormComponent } from '../component/forms/permission/sub-module-actions/edit-sub-module-action-form/edit-sub-module-action-form.component';
import { UpdateRolePermissionComponent } from '../component/administration/permission-administration/role-permission/update-role-permission/update-role-permission.component';
import { UpdateRolePermissionFormComponent } from '../component/forms/permission/update-role-permission/update-role-permission-form/update-role-permission-form.component';
import { AddAppConfigurationComponent } from '../component/app-configuration/add-app-configuration/add-app-configuration.component';
import { EditAppConfigurationComponent } from '../component/app-configuration/edit-app-configuration/edit-app-configuration.component';
import { ViewAppConfigurationComponent } from '../component/app-configuration/view-app-configuration/view-app-configuration.component';
import { AddConfigurationFormComponent } from '../component/forms/app-configuration/add-configuration-form/add-configuration-form.component';
import { EditConfigurationFormComponent } from '../component/forms/app-configuration/edit-configuration-form/edit-configuration-form.component';
import { AppConfigurationComponent } from '../component/views/app-configuration/app-configuration/app-configuration.component';
import { AuthService } from '../service/auth/auth.service';
import { CourtsService } from '../service/courts/courts.service';
import { GeneralService } from '../service/general/general.service';
import { LocationService } from '../service/location/location.service';
import { OfficesService } from '../service/offices/offices.service';
import { ProfilesService } from '../service/profiles/profiles.service';
import { VariableService } from '../service/public/variable.service';
import { RolesService } from '../service/roles/roles.service';
import { ModulesService } from '../service/system-modules/modules.service';
import { SubModulesService } from '../service/system-sub-modules/sub-modules.service';
import { SubModulesActionService } from '../service/system-sub-modules-action/sub-modules-action.service';
import { FloorsService } from '../service/floors/floors.service';
import { ModulePermissionsComponent } from '../component/administration/permission-administration/role-permission/module-permissions/module-permissions.component';
import { ModulePermissionsFormComponent } from '../component/forms/permission/modules/module-permissions-form/module-permissions-form.component';
import { AppConfigService } from '../service/app-config/app-config.service';
import { AppInfoComponent } from '../component/app-configuration/app-info/app-info.component';
import { AddCategoriesComponent } from '../component/administration/categories-administration/add-categories/add-categories.component';
import { EditCategoriesComponent } from '../component/administration/categories-administration/edit-categories/edit-categories.component';
import { ViewCategoriesComponent } from '../component/administration/categories-administration/view-categories/view-categories.component';
import { CategoriesComponent } from '../component/views/categories/categories.component';
import { AddCategoriesFormComponent } from '../component/forms/categories/add-categories-form/add-categories-form.component';
import { EditCategoriesFormComponent } from '../component/forms/categories/edit-categories-form/edit-categories-form.component';
import { AddItemsComponent } from '../component/administration/projects-administration/add-items/add-items.component';
import { EditItemsComponent } from '../component/administration/projects-administration/edit-items/edit-items.component';
import { ViewItemsComponent } from '../component/administration/projects-administration/view-items/view-items.component';
import { ItemsComponent } from '../component/views/items/items.component';
import { AddItemsFormComponent } from '../component/forms/items/add-items-form/add-items-form.component';
import { EditItemsFormComponent } from '../component/forms/items/edit-items-form/edit-items-form.component';
import { ViewItemDetailsComponent } from '../component/administration/projects-administration/view-item-details/view-item-details.component';
import { ItemDetailsComponent } from '../component/views/item-details/item-details.component';
import { EditedItemDetailsComponent } from '../component/views/edited-item-details/edited-item-details.component';
import { ViewEditedItemDetailsComponent } from '../component/administration/projects-administration/view-edited-item-details/view-edited-item-details.component';
import { PaymentsComponent } from '../component/views/Payments/payments/payments.component';
import { ViewPaymentComponent } from '../component/administration/Payment-Adminstration/View/view-payment/view-payment.component';
import { ViewExtensionComponent } from '../component/administration/Extension-Adminstration/View/view-extension/view-extension.component';
import { EditExtensionComponent } from '../component/administration/Extension-Adminstration/Edit/edit-extension/edit-extension.component';
import { AddExtensionComponent } from '../component/administration/Extension-Adminstration/Add/add-extension/add-extension.component';
import { TimeExtensionComponent } from '../component/views/Time-Extension/time-extension/time-extension.component';
import { ExtensionFormComponent } from '../component/forms/Extension-Time-Forms/Extension-forms/extension-form/extension-form.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'; 
import { EditExtensionFormComponent } from '../component/forms/Extension-Time-Forms/Edit-Extension-forms/edit-extension-form/edit-extension-form.component';
import { TimeExtensionDetailedViewComponent } from '../component/views/Time-Extension/time-extension-detailed-view/time-extension-detailed-view.component';
import { ImplementationPlanComponent } from '../component/views/Implementation-plan/implementation-plan/implementation-plan.component';
import { EditImplementatioFormComponent } from '../component/forms/Implementation-Plan-Forms/Edit/edit-implementatio-form/edit-implementatio-form.component';
import { AddImplementatioFormComponent } from '../component/forms/Implementation-Plan-Forms/Add/add-implementatio-form/add-implementatio-form.component';
import { AddImplementationPlanComponent } from '../component/administration/Implementation-Plan-Adminstration/Add/add-implementation-plan/add-implementation-plan.component';
import { EditImplementationPlanComponent } from '../component/administration/Implementation-Plan-Adminstration/Edit/edit-implementation-plan/edit-implementation-plan.component';
import { ViewImplementationPlanComponent } from '../component/administration/Implementation-Plan-Adminstration/View/view-implementation-plan/view-implementation-plan.component';








@NgModule({
  declarations: [
    ResetSessionComponent,
    LoginComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    ResetPasswordFormComponent,
    ForgotPasswordFormComponent,
    ForgotPasswordComponent,
    ActivateAccountComponent,
    ActivateAccountFormComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    LoginFormComponent,
    LogoutComponent,
    ViewUsersComponent,
    AddUsersComponent,
    EditUsersComponent,
    ViewUserDetailsComponent,
    UsersDetailsComponent,
    UsersComponent,
    AddUserFormComponent,
    EditUserFormComponent,
    AddRolesComponent,
    EditRolesComponent,
    ViewRolesComponent,
    AddRoleFormComponent,
    EditRoleFormComponent,
    RolesComponent,
    AddRoomComponent,
    EditRoomComponent,
    ViewRoomComponent,
    RoomsComponent,
    AddRoomFormComponent,
    EditRoomFormComponent,
    ViewFloorComponent,
    AddFloorComponent,
    EditFloorComponent,
    EditFloorFormComponent,
    AddFloorFormComponent,
    FloorsComponent,
    ProfilesComponent,
    AddProfileComponent,
    EditProfileComponent,
    ViewProfileComponent,
    EditProfileFormComponent,
    AddProfileFormComponent,
    AddModuleComponent,
    EditModuleComponent,
    ViewModuleComponent,
    AddSubModuleComponent,
    EditSubModuleComponent,
    ViewSubModuleComponent,
    AddSubModuleActionComponent,
    EditSubModuleActionComponent,
    ViewSubModuleActionComponent,
    ModulesComponent,
    SubModulesComponent,
    SubModuleActionComponent,
    AddModuleFormComponent,
    EditModuleFormComponent,
    AddSubModuleFormComponent,
    EditSubModuleFormComponent,
    AddSubModuleActionFormComponent,
    EditSubModuleActionFormComponent,
    UpdateRolePermissionComponent,
    UpdateRolePermissionFormComponent,
    ModulePermissionsComponent,
    ModulePermissionsFormComponent,
    AddAppConfigurationComponent,
    EditAppConfigurationComponent,
    ViewAppConfigurationComponent,
    AddConfigurationFormComponent,
    EditConfigurationFormComponent,
    AppConfigurationComponent,
    AddCategoriesComponent,
    EditCategoriesComponent,
    ViewCategoriesComponent,
    CategoriesComponent,
    AddCategoriesFormComponent,
    EditCategoriesFormComponent,
    AddItemsComponent,
    EditItemsComponent,
    ViewItemsComponent,
    ItemsComponent,
    AddItemsFormComponent,
    EditItemsFormComponent,
    ViewItemDetailsComponent,
    ItemDetailsComponent,
    EditedItemDetailsComponent,
    ViewEditedItemDetailsComponent,
    EmptyFileComponent,
    AppInfoComponent, 
    PaymentsComponent,
    ViewPaymentComponent,
    ViewExtensionComponent,
    EditExtensionComponent,
    AddExtensionComponent,
    TimeExtensionComponent,
    ExtensionFormComponent,
    EditExtensionFormComponent,
    TimeExtensionDetailedViewComponent,  
    ImplementationPlanComponent,
    EditImplementatioFormComponent,
    AddImplementatioFormComponent,
    AddImplementationPlanComponent,
    EditImplementationPlanComponent,
    ViewImplementationPlanComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    RichTextEditorAllModule
  ],
  providers: [
    AuthService,
    ProfilesService,
    CourtsService,
    OfficesService,
    RolesService,
    LocationService,
    GeneralService,
    VariableService,
    ModulesService,
    SubModulesService,
    SubModulesActionService,
    FloorsService,
    AppConfigService

  ],
})
export class SharedModule { }
