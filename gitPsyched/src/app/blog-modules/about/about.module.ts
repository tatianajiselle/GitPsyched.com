import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './About.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MatCardModule
    ],
    declarations: [ AboutComponent ],
    exports:[ AboutComponent,
            ],
    providers: []
})
export class AboutModule { }
