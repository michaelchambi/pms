import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-item-details',
  templateUrl: './view-item-details.component.html',
  styleUrls: ['./view-item-details.component.css']
})
export class ViewItemDetailsComponent implements OnInit {

  token: any;
  constructor() { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

}
