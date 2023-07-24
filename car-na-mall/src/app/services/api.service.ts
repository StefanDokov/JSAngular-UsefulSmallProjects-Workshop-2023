import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'http://localhost:5050/api';
  
  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get<any>(`${this.baseUrl}/users`);
  }

  getRents(){
    return this.http.get<any>(`${this.baseUrl}/rents`);
  }
  createRent(craftObj: Object){
      return this.http.post<any>(`${this.baseUrl}/rents/create`, craftObj);
  }
  getOneRent(id: any){
    return this.http.get<any>(`${this.baseUrl}/rents/details/${id}`, );
  }
}
