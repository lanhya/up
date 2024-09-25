import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtResponse } from 'src/app/model/jwt-response';
import { AuthServiceComponent } from 'src/app/service/auth-service/auth-service.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading: boolean = false;

  ngOnInit(): void {

  }

  constructor(
    private authService: AuthServiceComponent,
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log('Login');
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response: JwtResponse) => {

          if (response.code === 200) {
            this.showMessage(response);
            setInterval(() => {
              // Assuming the response contains the token
              localStorage.setItem('token', response.token);
              this.router.navigate(['/dashboard']); // Redirect to a protected route
            }, 1000);
          }

        },
        error => {
          // Handle login failure, e.g., show error message to the user
          this.messageService.add({ severity: 'error', summary: 'Login failed', detail: `${error.status}: ${error.error}.` });
        }
      );
    }

  }

  showMessage(response: JwtResponse) {
    this.messageService.add({ severity: 'success', summary: `${response.message}`, detail: `${response.code}: ${response.message}.` });
  }


}
