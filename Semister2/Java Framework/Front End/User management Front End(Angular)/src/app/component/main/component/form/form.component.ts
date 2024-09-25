import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceComponent} from '../../service/service.component'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  formData: any = {};
  isEditMode = false;

  constructor(
    private myEntityService: ServiceComponent,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.myEntityService.getById(Number(id)).subscribe((data: any) => {
        this.formData = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.myEntityService.update(this.formData.id, this.formData).subscribe(() => {
        this.router.navigate(['/my-entity']);
      });
    } else {
      this.myEntityService.create(this.formData).subscribe(() => {
        this.router.navigate(['/my-entity']);
      });
    }
  }

}
