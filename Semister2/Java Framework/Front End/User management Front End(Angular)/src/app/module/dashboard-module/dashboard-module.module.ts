import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard.component';
import { CardComponent } from 'src/app/component/card/card.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'card', pathMatch: 'full' },
      { path: 'card', component: CardComponent },
      {
        path: 'user',
        loadChildren: () => import('../user-module/user-module.module').then(m => m.UserModuleModule)
      },
      {
        path: 'role',
        loadChildren: () => import('../role-module/role-module.module').then(m => m.RoleModuleModule)
      },
      {
        path: 'permission',
        loadChildren: () => import('../permission-module/permission-module.module').then(m => m.PermissionModuleModule)
      },
      {
        path: 'department',
        loadChildren: () => import('../department-module/department-module.module').then(m => m.DepartmentModuleModule)
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModuleModule { }
