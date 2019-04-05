import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FurnitureService } from '../furniture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  form: FormGroup; // ще бъде и form в form tag-a

  // formBuilder за reactive-form, furnitureService
  constructor(private fb: FormBuilder, private furnitureService: FurnitureService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      make: ['', [Validators.required, Validators.minLength(4)]], // make в formControlName
      model: ['', [Validators.required, Validators.minLength(4)]],
      year: ['', [Validators.required, Validators.min(1950), Validators.max(2050)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(1)]],
      imageUrl: ['', [Validators.required, Validators.pattern(/(https:)([/|.|\w|\s|-])*\.(?:jpg|png)/)]],
      material: ['', Validators.nullValidator]
    });
  }

  createFurniture() {
    this.furnitureService.createFurniture(this.form.value).subscribe(data => { // данните от html формата
      this.router.navigate(['/furniture/all']); // redirect към furniture/all, а url от navbar
    });
  }

  get f() { // за да пишем по-малко в *ngIf в html като използваме f.
    return this.form.controls;
  }

  get invalid() { // ако има невалидно поле/полета бутона да е disabled
    return this.form.invalid;
  }
}
