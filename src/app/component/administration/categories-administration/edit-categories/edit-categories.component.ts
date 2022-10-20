import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent implements OnInit {

  token: any;
  constructor() { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }


}
