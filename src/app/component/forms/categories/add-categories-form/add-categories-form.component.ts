import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VariableService } from '../../../../service/public/variable.service';
import { CategoriesService } from '../../../../service/categories/categories.service';

@Component({
  selector: 'app-add-categories-form',
  templateUrl: './add-categories-form.component.html',
  styleUrls: ['./add-categories-form.component.css']
})
export class AddCategoriesFormComponent implements OnInit {

  id: any;
  selectedFile: any;
  messageError: any;
  success: any;
  data = {
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
  }

  logoUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }

  addCategory() {
    this.variable.bfrcreating = false;
    this.variable.creating = true;

    let formData = new FormData();
    formData.append('project_category_name', this.data.project_category_name);
    formData.append('category_icon', this.selectedFile);

 
    this.category.addCategory(formData).subscribe(
      res => {
        this.variable.appSuccess = true;
        this.variable.successMessage = res.message;
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        this.router.navigate(['/project-category/' + this.id]);

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
