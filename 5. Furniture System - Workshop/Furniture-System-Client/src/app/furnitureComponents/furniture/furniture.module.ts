import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FurnitureAllComponent } from '../furniture-all/furniture-all.component';
import { CreateFurnitureComponent } from '../create-furniture/create-furniture.component';
import { FurnitureDetailsComponent } from '../furniture-details/furniture-details.component';
import { FurnitureUserComponent } from '../furniture-user/furniture-user.component';
import { FurnitureService } from '../furniture.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [  // за модули
    CommonModule,
    ReactiveFormsModule, // изнесох го от app.module, защото furniture go izpolzwa
    RouterModule.forChild([// защото изнесох всички furniture routes app-routing.module и ги слагм тук forChild за lazyLoading
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'create', component: CreateFurnitureComponent }, // path от html на navbar canActivate, za da ne move wseki da go dostapi, върнах го в app-routing  да е на 1 място
      { path: 'all', component: FurnitureAllComponent }, // махам funture/ ot path и го местим в app.routing 
      { path: 'details/:id', component: FurnitureDetailsComponent },
      { path: 'user', component: FurnitureUserComponent }
    ])
  ],
  declarations: [ // за компоненти  изнесох ги от app.module.ts
    FurnitureAllComponent,
    CreateFurnitureComponent,
    FurnitureDetailsComponent,
    FurnitureUserComponent,
  ],
  providers: [
    FurnitureService, // изнесох го от providers от app.module
  ]
})
export class FurnitureModule { }
