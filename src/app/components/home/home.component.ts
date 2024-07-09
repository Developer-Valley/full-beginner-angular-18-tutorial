import { Component } from '@angular/core';
import { Post } from '../../model/post';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  post: Post;

  constructor() {
    this.post = new Post('ChatGPT 4o is here!', 'New chatGTP is here and it can talk to you just like a human.');
  }
}
