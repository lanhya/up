// Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UserListComponent } from './component/user/user-list/user-list.component';
import { UserFormComponent } from './component/user/user-form/user-form.component';
import { RoleListComponent } from './component/role/role-list/role-list.component';
import { RoleFormComponent } from './component/role/role-form/role-form.component';
import { UserDetailComponent } from './component/user/user-detail/user-detail.component';
import { RoleDetailComponent } from './component/role/role-detail/role-detail.component';
import { DepartmentListComponent } from './component/department/department-list/department-list.component';
import { DepartmentFormComponent } from './component/department/department-form/department-form.component';
import { DepartmentDetailComponent } from './component/department/department-detail/department-detail.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { AuthServiceComponent } from './service/auth-service/auth-service.component';
import { MessageComponent } from './component/message/message.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ListComponent } from './component/main/component/list/list.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CardComponent } from './component/card/card.component';

// Services
import { ConfirmationService, MessageService } from 'primeng/api';
import { CustomMessageService } from './service/messageService/customMessage.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserFormComponent,
    RoleListComponent,
    RoleFormComponent,
    UserDetailComponent,
    RoleDetailComponent,
    DepartmentListComponent,
    DepartmentFormComponent,
    DepartmentDetailComponent,
    ForgotPasswordComponent,
    ListComponent,
    UserListComponent,
    MessageComponent,
    NotfoundComponent,
    DashboardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CardModule,
    HttpClientModule,
    MenubarModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    ToastModule,
    DropdownModule,
    ImageModule,
    ConfirmDialogModule

  ],
  providers: [AuthServiceComponent, MessageService, CustomMessageService, ConfirmationService], // Include services here
  bootstrap: [AppComponent]
})
export class AppModule { }
