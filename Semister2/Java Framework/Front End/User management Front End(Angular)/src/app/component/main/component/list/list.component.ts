import { Component, Injectable } from '@angular/core';
import { ServiceComponent} from '../../service/service.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
@Injectable({
  providedIn: 'root'  // This makes the service available application-wide
})
export class ListComponent {
  items: any[] = [];

  constructor(public myEntityService : ServiceComponent) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.myEntityService.getAll().subscribe((data: any[]) => {
      this.items = data;
    });
  }

}
