import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../service/general/general.service';
import { CategoriesService } from '../../../../service/categories/categories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  token: any;
  categoryName: any;
  params = {
    id: ''
  }
  constructor(
    private general: GeneralService,
    private category: CategoriesService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.showCategory(this.activeRoute.snapshot.paramMap.get('id2'));
    this.general.verifyToken();
  }

  showCategory(catId: any) {
    this.params.id = catId;
    this.category.showCategories(this.params).subscribe(
      res => {
        this.categoryName = res;

      },

      err => {
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }

}
