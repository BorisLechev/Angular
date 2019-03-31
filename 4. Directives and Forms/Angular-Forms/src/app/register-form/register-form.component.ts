import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  phoneCodesArray: string[] = ['+971', '+359', '+972', '+198', '+701'];
  jobsArray: string[] = ['Designer', 'Manager', 'Accounting'];
  @ViewChild('registerForm') // наблюдава нещо в registerForm html
  htmlForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  register(formData: any) {
    this.htmlForm.reset(); // след submit да изчисти полетата
    console.log(this.htmlForm);
  }
}
