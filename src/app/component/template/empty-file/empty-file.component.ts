import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-file',
  templateUrl: './empty-file.component.html',
  styleUrls: ['./empty-file.component.css']
})
export class EmptyFileComponent implements OnInit {

  token: any;
  constructor() { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

}
