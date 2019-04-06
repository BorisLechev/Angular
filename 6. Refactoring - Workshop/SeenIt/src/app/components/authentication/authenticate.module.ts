import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [ // модулите, които използвам в post
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule, // за директиви kato ngFor ngIf
        FormsModule,
        RouterModule
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ]
})
export class AuthenticateModule {

}