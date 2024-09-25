import { NgModule } from '@angular/core';

// Components
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AuthGuard } from './component/guard/guard.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: "",
    component: AppComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../app/module/dashboard-module/dashboard-module.module').then(m => m.DashboardModuleModule)
      }
    ]
  },

  { path: '**', component: NotfoundComponent, }// Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
