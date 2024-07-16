import { Component } from '@angular/core';
import { Post } from '../../model/post';
import { BlogCardComponent } from "../blog-card/blog-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {}
}
