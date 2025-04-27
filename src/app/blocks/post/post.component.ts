import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Post } from '../../models/post.model';
@Component({
  selector: 'app-post',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  post = input<Post>();

  constructor()
  {
    
  }

}
