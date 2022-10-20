import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VariableService } from '../../../service/public/variable.service';
import { SubModulesActionService } from '../../../service/system-sub-modules-action/sub-modules-action.service';
import { CategoriesService } from '../../../service/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  basepath=this.variable.CATEGORY_FILE_API;
  searchText: any;
  p: number = 1;
  categoryList: any;
  success: boolean = false;
  action: boolean = true;
  close: boolean = false;
  actionError: boolean = false;
  message: any;
  sub_moduleId: any;

  data = {
    id: ''
  }

  constructor(
    public variable: VariableService,
    public subaction: SubModulesActionService,
    private activeRoute: ActivatedRoute,
    public category: CategoriesService
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.subaction.userRoles(this.activeRoute.snapshot.paramMap.get('id'));
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id');
  }

  getCategories() {
    this.category.getCategories().subscribe(
      res => {
        this.categoryList = res;
      },

      err => {
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }

  activateCategory(id: any) {
    this.data.id = id;
    this.category.activateCategory(this.data).subscribe(
      res => {
        this.action = false;
        this.close = true;

      },
      err => {
        this.message = err.message;
        this.actionError = true;
        this.close = true;
        this.action = false;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }

  deactivateCategory(id: any) {
    this.data.id = id;
    this.category.deactivateCategory(this.data).subscribe(
      res => {
        this.action = false;
        this.close = true;

      },
      err => {
        this.message = err.message;
        this.actionError = true;
        this.close = true;
        this.action = false;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
