import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general/general.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  token: any;
  sub_moduleId: any;
  constructor(
    private general: GeneralService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id');
  }
// defined the array of data
public data: string[] = ['Michael Chambi', 'Luciana Mtitu', 'Beatrice Jika', 'Juma Kimari', 'Said Tamim', 'Amina Said', 'Haroon Tunga'];
public observers: string[] =['Joseph Doe', 'Mary Brown', 'Ozile Dos Santous'];
// set placeholder to MultiSelect input element
public placeholder: string = 'Select Team member';
//set height to popup list
public popupHeight:string = '200px';
public popupWidth: string='300px';
public placeholder2: string='Please type the Task description here';
public placeholder3: string='Select Observers';
public placeholder4: string ='Select Project Manager';
public manager:string[] =['Samuel Mshote', 'Michael Chambi','Said Said', 'Malim Twaib']
}
