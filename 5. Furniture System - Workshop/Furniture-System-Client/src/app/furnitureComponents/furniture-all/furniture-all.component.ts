import { Component, OnInit } from '@angular/core';
import IFurniture from '../../models/IFurniture';
import { FurnitureService } from '../furniture.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.css']
})
export class FurnitureAllComponent implements OnInit {
  furniture$: Observable<IFurniture[]>; // stream използвам го в *ngFor (async pipe -> не се грижа за subscribe unsubscribe)

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.furniture$ = this.furnitureService.getAllFurniture(); // observable
  }

}
