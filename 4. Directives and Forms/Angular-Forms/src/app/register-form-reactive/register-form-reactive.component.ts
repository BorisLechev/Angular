import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form-reactive',
  templateUrl: './register-form-reactive.component.html',
  styleUrls: ['./register-form-reactive.component.css']
})
export class RegisterFormReactiveComponent implements OnInit {
  form;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({ // group група от много полета form отива в <form> html
      // какво има в полето и валидатори required, че е зад. полето във втори масив, защото иначе 3-я аргумент е асинхронен валидатор
      fullName: ['', [Validators.required, Validators.pattern(/[A-Z][a-z]+ [A-Z][a-z]+/)]], // отива в formControlName на input fullName
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      jobsSelector: ['Select one of options below', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/)]],
      repeatPassword: ['', Validators.required]
    });
  }

  register() {
    console.log(this.form); // към това bind-ме w <form> html
  }

  get f() {
    return this.form.controls;
  }

  get status() {
    return this.form.status === "VALID" ? true : false;
  }
}
