import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceComponent} from '../../service/service.component'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  item: any;

  constructor(
    private myEntityService: ServiceComponent,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.myEntityService.getById(Number(id)).subscribe(data => {
      this.item = data;
    });
  }

}
