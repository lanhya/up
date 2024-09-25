import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { CustomMessageService } from 'src/app/service/messageService/customMessage.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: UserModel[] = [];


  constructor(
    private userService: UserService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private mService: CustomMessageService,
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe((response: any) => {
      this.users = response;
    });
  }

  editUser(user: UserModel) {
    this.router.navigate([`/dashboard/user/update/${user.id}`], { state: { user: user } });
  }

  deleteUser(id: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.userService.deleteUser(id).subscribe((response: any) => {
          if (response.code === 200) {
            this.mService.showSuccess("Delete user successfully.");
            this.loadUsers();
          }

        },
        (error: HttpErrorResponse) => {
          // Log the error for further investigation
          this.mService.showError("Error while delete user.");

        })
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    });
  }


}
