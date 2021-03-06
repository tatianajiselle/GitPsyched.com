import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { Post2Component } from './post2.component';
import { MatCardModule } from '@angular/material/card';

import { DataService } from '../../data.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MatCardModule
    ],
    declarations: [ Post2Component ],
    exports: [ Post2Component ],
    providers: [ DataService ]
})
export class Post2Module { }
