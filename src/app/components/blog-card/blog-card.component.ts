import { Component } from '@angular/core';
import { Post } from '../../model/post';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  post: Post;
  likes = 0;

  constructor() {
    this.post = new Post(
      'ChatGPT 4o is here!',
      'New chatGTP is here and it can talk to you just like a human.',
      'Developer Valley',
      '2024-07-13',
      'img/chatgpt4o.jpg'
    );
  }

  like() {
    this.likes++;
  }
}
