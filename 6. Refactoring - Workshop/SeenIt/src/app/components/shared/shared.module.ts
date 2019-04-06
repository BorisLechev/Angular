import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [ // модулите, които използвам в shared
        ContentComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule, // за директиви kato ngFor ngIf
        RouterModule, // озползвам routerLinks
    ],
    exports: [ // към app.module
        ContentComponent,
        FooterComponent,
        HeaderComponent
    ]
})
export class SharedModule {

}