import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8088/user'; // Spring Boot API URL
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.apiUrl}/dto/all`);
  }

  createUser(user:any): Observable<UserModel> {
    console.log('User', user);
    const formData = new FormData();
    formData.append('user', JSON.stringify(user.user));  // User data
    formData.append('file', user.file);     // Image file
    return this.http.post<UserModel>(`${this.apiUrl}/create`, formData);
  }

  updateUser(id: string, user: UserModel): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }


}
