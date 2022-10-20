import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VariableService } from '../public/variable.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private url = this.variable.API_JSDS;

  constructor(
    private http: HttpClient,
    private router: Router,
    private variable: VariableService
  ) { }

  getRegions() {
    return this.http.get<any>(`${this.url}/jmaps/regions`);
  }

  showRegion(id:any){
    return this.http.get<any>(`${this.url}/regions/show/${id}`);
  }

  showDistrict(id:any){
    return this.http.get<any>(`${this.url}/districts/show/${id}`);
  }

  showMunicipal(id:any){
    return this.http.get<any>(`${this.url}/municipals/show/${id}`);
  }

  showWard(id:any){
    return this.http.get<any>(`${this.url}/wards/show/${id}`);
  }

}
