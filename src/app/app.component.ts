import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Productos';
}
