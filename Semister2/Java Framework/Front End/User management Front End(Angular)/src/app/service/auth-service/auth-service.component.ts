import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtResponse } from 'src/app/model/jwt-response';
import { Response } from 'src/app/model/response.model';
import { UserModel } from 'src/app/model/user.model';
import { environment } from 'src/environment/environment.staging';
@Injectable({
  providedIn: 'root'
})

export class AuthServiceComponent {
  private url = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient, private router: Router,) {}



  register(user: UserModel): Observable<Response> {
    return this.http.post<Response>(`${this.url}/register`, user);
  }

  login(user: UserModel): Observable<JwtResponse> {
    const newObjectUser = {
      userName: user.userName,
      password: user.password
    }
    return this.http.post<JwtResponse>(`${this.url}/login`, newObjectUser);
  }

  logout() {
    console.log('Token removed:', localStorage.getItem('token'));  // Should log `null`
    this.router.navigate(['/login']); // Redirect to login page
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Check if token is present
  }


}
