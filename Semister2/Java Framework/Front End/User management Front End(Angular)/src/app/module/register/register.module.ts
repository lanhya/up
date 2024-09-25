import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RegisterComponent } from 'src/app/authentication/register/register.component';
const routes: Routes = [
  { path: '', component: RegisterComponent }
];

@NgModule({
  providers: [
    MessageService
  ],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RegisterModule { }
