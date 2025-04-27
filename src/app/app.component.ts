import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./blocks/navbar/navbar.component";
import { PostviewComponent } from "./blocks/postview/postview.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, PostviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MiniSocialMedia';
}
