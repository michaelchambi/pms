import { Component, OnInit } from '@angular/core';
import { VariableService } from 'src/app/service/public/variable.service';
import { SubModulesActionService } from 'src/app/service/system-sub-modules-action/sub-modules-action.service';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  searchText: any;
  p: number = 1;
  taskList: any;
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
    public task: TaskService
  ) { }

  ngOnInit(): void {
    this.gettask();
    this.subaction.userRoles(this.activeRoute.snapshot.paramMap.get('id'));
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id');
  }

  gettask() {
    this.task.gettask().subscribe(
      res => {
        this.taskList = res;
      },

      err => {
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }

  activatetask(id: any) {
    this.data.id = id;
    this.task.activateTask(this.data).subscribe(
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

  deactivatetask(id: any) {
    this.data.id = id;
    this.task.deactivateTask(this.data).subscribe(
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
