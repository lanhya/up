import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  loading: boolean = false;
  loadingProcess() {
    this.loading = true;
  }

  stopLoadingProcess() {
    this.loading = false;
  }
}
