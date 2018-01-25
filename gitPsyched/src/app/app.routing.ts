import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './blog-modules/About/About.component';
import { Post2Component } from './blog-modules/post2/post2.component';

const routes: Routes = [
    { path: 'home',           component: HomeComponent },
    { path: 'About',          component: AboutComponent },
    { path: 'post2',          component: Post2Component },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
