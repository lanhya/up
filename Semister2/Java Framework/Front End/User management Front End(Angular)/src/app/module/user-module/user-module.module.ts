import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from 'src/app/component/user/user-list/user-list.component';
import { AuthGuard } from 'src/app/component/guard/guard.component';
import { UserDetailComponent } from 'src/app/component/user/user-detail/user-detail.component';
import { UserFormComponent } from 'src/app/component/user/user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add',
    component: UserFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update/:id',
    component: UserFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detail',
    component: UserDetailComponent,
    canActivate: [AuthGuard]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModuleModule { }
