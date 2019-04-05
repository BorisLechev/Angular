import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FurnitureService } from '../furniture.service';
import IFurniture from '../../models/IFurniture';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  furniture: IFurniture;

  constructor(private route: ActivatedRoute, private furnitureService: FurnitureService) { }

  ngOnInit() { // да вземем id от url
    this.route.params.subscribe(data => {
      const id = data['id']; // без точки

      this.furnitureService.getDetails(id).subscribe((data) => { // подаваме към furniture.service subscribe заради async pipe
        this.furniture = data;
      });
    });
  }

}
