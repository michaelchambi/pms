import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class VariableService {
  public title: boolean = true;
  public forgot: boolean = false;
  public activate: boolean = false;

  public fullname: any;
  public email: any;
  public profileId: any;
  public token: any;
  public loginErrorAlert: boolean = false;
  public loginErrorMesssage: any;
  public deleteUser: boolean = false;
  public editUser: any;
  public resetPassword: boolean = false;

  successMessage: any;
  errorMessage: any;

  appError: boolean = false;
  appSuccess: boolean = false;
  addUserError: boolean = false;
  addUserSuccess: boolean = false;

  bfrcreating: boolean = true;
  creating: boolean = false;

  public REMOTE_URL="http://172.19.200.132:8090/api/";
  public API_URL = "http://172.19.200.132:8090/pms-center/api/";
  //public API_URL = "http://localhost:8085/pms-center/api/";
  public API_JSDS = "http://154.118.230.244:8080/api/v1";
  public ACT_FILE_API="http://172.19.200.132:8090/pms-center/api/actFile/";
  public CATEGORY_FILE_API = "http://172.19.200.132:8090/pms-center/api/project_category/categoryFile/";
  
  public STORAGE_PATH = "http://172.19.200.132:8090/pms-center/storage-files/logo/";
  public CATEGORY_FILE_PATH = "http://172.19.200.132:8090/storage-files/projec/category/files/";
  public ITEM_IMAGE_PATH = "http://172.19.200.132:8090/storage-files/translation/items/image";

  constructor() { }
}
