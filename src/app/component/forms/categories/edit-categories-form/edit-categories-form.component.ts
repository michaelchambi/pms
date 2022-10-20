import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VariableService } from '../../../../service/public/variable.service'
import { CategoriesService } from '../../../../service/categories/categories.service';

@Component({
  selector: 'app-edit-categories-form',
  templateUrl: './edit-categories-form.component.html',
  styleUrls: ['./edit-categories-form.component.css']
})
export class EditCategoriesFormComponent implements OnInit {

  icon: any;
  submoduleId: any;
  selectedFile: any;
  messageError: any;
  success: any;
  data = {
    id: '',
    project_category_name: '',
    category_icon: ''
  }
  constructor(
    public variable: VariableService,
    public category: CategoriesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.showCategory(this.activeRoute.snapshot.paramMap.get('id2'));
  }

  logoUpload(e: any) {
    this.selectedFile = e.target.files[0];

  }

  showCategory(id: any) {
    this.data.id = id;
    this.category.showCategories(this.data).subscribe(
      res => {
        this.data = res;
        this.icon = res.categoryIcon;
        this.data.project_category_name=res.categoryName;
      },

      err => {
        this.messageError = err.error.message;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }

      }
    );
  }

  editCategory() {
    this.variable.bfrcreating = false;
    this.variable.creating = true;

    if (this.selectedFile == undefined) {
      let formData = new FormData();

      formData.append('id', this.data.id);
      formData.append('project_category_name', this.data.project_category_name);
      this.category.editCategory(formData).subscribe(
        res => {
          this.variable.appSuccess = true;
          this.variable.successMessage = res.message;
          this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
          this.router.navigate(['/project-category/' + this.submoduleId]);
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
    else {
      let formData = new FormData();
      formData.append('id', this.data.id);
      formData.append('project_category_name', this.data.project_category_name);
      formData.append('category_icon', this.selectedFile);
      this.category.editCategoryImage(formData).subscribe(
        res => {
          this.variable.appSuccess = true;
          this.variable.successMessage = res.message;
          this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
          this.router.navigate(['/project-category/' + this.submoduleId]);
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

}
