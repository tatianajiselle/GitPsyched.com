import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.scss']
})

export class Post2Component implements OnInit {
  // Define a users property to hold our user data
  posts: Array<any>;

  constructor(private dataService: DataService) {
    // Access the Data Service's getUsers() method we defined
    this.dataService.getUsers()
      .subscribe(res => this.posts = res);
  }

  ngOnInit() { }
}
