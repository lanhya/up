import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthServiceComponent } from 'src/app/service/auth-service/auth-service.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  items: MenuItem[] | undefined;
  data: any;
  userChart: any;
  roleChart: any;
  departmentChart: any;

  options: any;
  constructor(private authService: AuthServiceComponent, private router: Router) {}
  ngOnInit() {
    this.chart();
    this.menu();
  }
  // Chart
  chart() {
    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.userChart = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [1, 59, 80, 81, 56, 55, 40, 10, 20, 30, 15, 25]
                }
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }

            }
        };
    }

    menu() {
      this.items = [
        {
          label: 'Dashboard',
          icon: 'pi pi-microsoft', // Logout icon
          command: () => {
            this.router.navigate(['/dashboard']); // Navigate to Dashboard
          },
          styleClass: 'custom-menu'  // Add a class
        },
        {
          label: 'Users',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'List users',
              icon: 'pi pi-th-large',
              routerLink: '/dashboard/user',
            },
            {
              label: 'Add user role',
              icon: 'pi pi-user-plus'
            },
            {
              label: 'Delete user role',
              icon: 'pi pi-user-minus'
            }
          ]
        },
        {
          label: 'Roles',
          icon: 'pi pi-cog',
          items: [
            {
              label: 'List roles',
              icon: 'pi pi-th-large'
            },
            {
              label: 'link role permission',
              icon: 'pi pi-plus-circle'
            },
            {
              label: 'Unlink role permission',
              icon: 'pi pi-minus-circle'
            }
          ]
        },
        {
          label: 'Permission',
          icon: 'pi pi-key',
          items: [
            {
              label: 'List permissions',
              icon: 'pi pi-th-large'
            }
          ]
        },
        {
          label: 'Department',
          icon: 'pi pi-home',
          items: [
            {
              label: 'List department',
              icon: 'pi pi-th-large'
            },
            {
              label: 'Add user department',
              icon: 'pi pi-plus-circle'
            },
            {
              label: 'Delete user department',
              icon: 'pi pi-minus-circle'
            }
          ]
        },
        {
          label: 'Logout',
          icon: 'pi pi-fw pi-sign-out', // Logout icon
          command: () => this.authService.logout() // Function to call on button click
        }
      ];
    }

  }

