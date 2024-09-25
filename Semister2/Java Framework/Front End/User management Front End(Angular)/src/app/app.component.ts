import { Component } from '@angular/core';
import { AuthServiceComponent } from './service/auth-service/auth-service.component';
import { Router } from '@angular/router';
import { LocalizedString } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'usermanagement';
  constructor(private authService: AuthServiceComponent, private router: Router) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']); // Redirect to home if already logged in
    }

  }
}
