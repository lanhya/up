import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.staging';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  private baseURL = environment;

  constructor(private http: HttpClient) {}

  getAll():Observable<any[]> {
    console.log('===> Http', this.baseURL);
    return this.http.get<any[]>(`${this.baseURL}/user/all`);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}`, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
