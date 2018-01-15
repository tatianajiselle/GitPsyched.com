import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { post1Component } from './post1.component';
import { MatCardModule } from '@angular/material/card';

// import { HomeComponent } from '../home.component';

// import { ComponentsModule } from '../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MatCardModule
        // ComponentsModule
    ],
    declarations: [ post1Component ],
    exports:[ post1Component,
            ],
    providers: []
})
export class post1Module { }
