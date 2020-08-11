import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  @Input() post;
  @Input() user;
  userNameLogged = 'Daniel'
  like = false

  constructor() { 
    
  }

  ngOnInit(): void {
    this.like = this.post.likes.find(u => u==this.userNameLogged)!=undefined;
  }

}
