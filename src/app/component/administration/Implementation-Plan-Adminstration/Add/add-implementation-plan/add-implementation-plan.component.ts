import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general/general.service';
@Component({
  selector: 'app-add-implementation-plan',
  templateUrl: './add-implementation-plan.component.html',
  styleUrls: ['./add-implementation-plan.component.css']
})
export class AddImplementationPlanComponent implements OnInit {
 
  token: any;
  constructor(
    private general: GeneralService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
  }
}
