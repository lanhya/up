import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {

  constructor(private messageService: MessageService) {}

  showSuccess(description: string) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: description });
  }

  showInfo(description: string) {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: description });
  }

  showWarn(description: string) {
      this.messageService.add({ severity: 'warn', summary: 'Warn', detail: description });
  }

  showError(description: string) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: description });
  }

}
