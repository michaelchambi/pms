import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VariableService } from '../public/variable.service';

@Injectable({
  providedIn: 'root'
})
export class CourtsService {

  private url = this.variable.API_JSDS;
  courts:any
  courtDetails:any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private variable: VariableService
  ) { }

  getCourts() {
    return this.http.get<any>(`${this.url}/jmaps/courts`);
  }

  showCourts(id:any) {
    return this.http.get<any>(`${this.url}/courts/show/${id}`);
  }

  __Courts(){
    this.getCourts().subscribe(
      res=>{
        this.courts = res.courts;        
      },
      err=>{
        this.courts = err;
      }
    );
  }


  

}
