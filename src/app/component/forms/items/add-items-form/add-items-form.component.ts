import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VariableService } from '../../../../service/public/variable.service';
import { ItemsService } from '../../../../service/items/items.service';
import { CategoriesService } from '../../../../service/categories/categories.service'
import { FloorsService } from 'src/app/service/floors/floors.service';
@Component({
  selector: 'app-add-items-form',
  templateUrl: './add-items-form.component.html',
  styleUrls: ['./add-items-form.component.css']
})
export class AddItemsFormComponent implements OnInit {

  selectedSwahili: any;
  selectedChinese: any;
  selectedImage: any;
  messageError: any;
  success: any;
  categoryId: any;
  submoduleId: any;

  data = {
    project_category:'',
    project_name: '',
    project_owner: '',
    project_master:''
  }
  categoryDetails: any;
  departmentDetails: any;
  constructor(
    public variable: VariableService,
    public item: ItemsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    public category:CategoriesService,
    public department:FloorsService
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.categoryId = this.activeRoute.snapshot.paramMap.get('id2');
    this.getCategories();
    this.getDepartments();
  }

  swahiliUpload(e: any) {
    this.selectedSwahili = e.target.files[0];
  }

  chineseUpload(e: any) {
    this.selectedChinese = e.target.files[0];
  }

  imageUpload(e: any) {
    this.selectedImage = e.target.files[0];
  }

getCategories(){
  this.category.getCategories().subscribe(
    (response)=>{
      this.categoryDetails=response;
    },
    err => {
      this.variable.appError = true;
      this.variable.bfrcreating = true;
      this.variable.creating = false;

      this.messageError = err.error.message;
      if (err.error.token == 0) {
        localStorage.setItem('token', err.error.token);
      }
    }
    )
}


getDepartments(){
  this.department.getFloors().subscribe((result)=>{
    this.departmentDetails=result;
  },

  err => {
    if (err.error.token == 0) {
      localStorage.setItem('token', err.error.token);
    }
  }

  )
}
  addItems() {
    this.variable.bfrcreating = false;
    this.variable.creating = true;
    let formData = new FormData();
    formData.append('project_name', this.data.project_name);
    formData.append('project_category', this.data.project_category);
    formData.append('project_owner', this.data.project_owner);
    formData.append('project_master', this.data.project_master);
    this.item.addItem(formData).subscribe(
      res => {
        this.variable.appSuccess = true;
        this.variable.successMessage = res.message;
        this.router.navigate(['/category-items/' + this.submoduleId + '/' + this.categoryId]);
      },
      err => {
        this.variable.appError = true;
        this.variable.bfrcreating = true;
        this.variable.creating = false;

        this.messageError = err.error.message;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }

}
