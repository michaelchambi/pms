import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-edited-item-details',
  templateUrl: './view-edited-item-details.component.html',
  styleUrls: ['./view-edited-item-details.component.css']
})
export class ViewEditedItemDetailsComponent implements OnInit {

  token: any;
  constructor() { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

}
