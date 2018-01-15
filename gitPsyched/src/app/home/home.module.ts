import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AboutModule } from '../blog-modules/About/About.module';
import { Post2Module } from '../blog-modules/post2/post2.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';

// import { ComponentsModule } from '../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        AboutModule,
        Post2Module,
        MatCardModule
        // ComponentsModule
    ],
    declarations: [ HomeComponent ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
