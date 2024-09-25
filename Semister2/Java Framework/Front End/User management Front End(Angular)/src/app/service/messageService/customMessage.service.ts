import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class CustomMessageService {

  constructor(private messageService: MessageService) { }

  showSuccess(description: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: description });
  }

  showInfo(description: string) {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: description });
  }

  showWarn(description: string) {
    this.messageService.add({ severity: 'warn', summary: 'Warning', detail: description });
  }

  showError(description: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: description });
  }

}
