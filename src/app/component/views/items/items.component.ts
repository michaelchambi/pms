import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VariableService } from '../../../service/public/variable.service';
import { SubModulesActionService } from '../../../service/system-sub-modules-action/sub-modules-action.service';
import { ItemsService } from '../../../service/items/items.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  basepath=this.variable.CATEGORY_FILE_API;
  searchText: any;
  p: number = 1;
  itemList: any;
  success: boolean = false;
  action: boolean = true;
  close: boolean = false;
  actionError: boolean = false;
  message: any;
  sub_moduleId: any;

  data = {
    id: ''
  }

  catId: any;

  params = {
    categoryId: ''
  }
  departmentDetails: any;

  constructor(
    public variable: VariableService,
    public subaction: SubModulesActionService,
    private activeRoute: ActivatedRoute,
    public items: ItemsService
  ) { }

  ngOnInit(): void {
    this.getItems(this.activeRoute.snapshot.paramMap.get('id2'));
    this.subaction.userRoles(this.activeRoute.snapshot.paramMap.get('id'));
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.catId = this.activeRoute.snapshot.paramMap.get('id2');
  }

  getItems(id: any) {
    this.params.categoryId = id;
    this.items.getItem(this.params).subscribe(
      res => {
        this.itemList = res;
      },

      err => {
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }

 

  activateItem(id: any) {
    this.data.id = id;
    this.items.activateItem(this.data).subscribe(
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

  deactivateItem(id: any) {
    this.data.id = id;
    this.items.deactivateItem(this.data).subscribe(
      res => {
        this.action = false;
        this.close = true;
      },

      err => {
        this.actionError = true;
        this.close = true;
        this.action = false;
        this.message = err.message;
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
