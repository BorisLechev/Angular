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
      // какво има в полето и валидатори required, че е зад. полето
      fullName: ['', Validators.required, Validators.pattern('/[A-Z][a-z]+ [A-Z][a-z]+/')], // отива в formControlName на input fullName
      email: ['', Validators.required],

    });
  }

  register(){
    console.log(this.form); // към това bind-ме w <form> html
  }

  get f(){
    return this.form.controls;
  }
}
