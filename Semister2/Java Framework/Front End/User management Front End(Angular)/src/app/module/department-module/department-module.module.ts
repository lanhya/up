import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailComponent } from 'src/app/component/department/department-detail/department-detail.component';
import { DepartmentFormComponent } from 'src/app/component/department/department-form/department-form.component';
import { AuthGuard } from 'src/app/component/guard/guard.component';
import { DepartmentListComponent } from 'src/app/component/department/department-list/department-list.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'department/add',
    component: DepartmentFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'department/update/:id',
    component: DepartmentFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'department/detail',
    component: DepartmentDetailComponent,
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
export class DepartmentModuleModule { }
