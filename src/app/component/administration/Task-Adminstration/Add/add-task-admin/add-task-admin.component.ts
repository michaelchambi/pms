import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general/general.service';
@Component({
  selector: 'app-add-task-admin',
  templateUrl: './add-task-admin.component.html',
  styleUrls: ['./add-task-admin.component.css']
})
export class AddTaskAdminComponent implements OnInit {

  token: any;
  constructor(
    private general: GeneralService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
  }
}
