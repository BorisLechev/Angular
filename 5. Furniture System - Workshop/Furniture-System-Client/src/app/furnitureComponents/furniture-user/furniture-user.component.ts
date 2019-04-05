import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { Observable } from 'rxjs';
import IFurniture from '../../models/IFurniture';

@Component({
  selector: 'app-furniture-user',
  templateUrl: './furniture-user.component.html',
  styleUrls: ['./furniture-user.component.css']
})
export class FurnitureUserComponent implements OnInit {
  userFurniture$: Observable<IFurniture[]> // $ (observable), заради async pipe в html

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.userFurniture$ = this.furnitureService.getUserFurniture();
  }

  deleteFurniture(id) {
    this.furnitureService.deleteFurniture(id).subscribe((data) => {
      console.log('delete', data);
      this.userFurniture$ = this.furnitureService.getAllFurniture(); // при делете да се пререндерира
    });
  }
}
