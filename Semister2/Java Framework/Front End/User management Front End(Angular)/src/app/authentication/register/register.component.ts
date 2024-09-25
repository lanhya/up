import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceComponent } from 'src/app/service/auth-service/auth-service.component';
import { MessageService } from 'primeng/api';
import { Response } from 'src/app/model/response.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private authService: AuthServiceComponent, private fb: FormBuilder, private messageService: MessageService) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        (response : Response) => {
          this.message(response.status, response.message);
        },
        error => {
          console.error("Registration failed", error);
        }
      );
    }

  }

  message (status: string, message: string) {
    this.messageService.add({ severity: 'success', summary: status, detail: message });
  }
}
