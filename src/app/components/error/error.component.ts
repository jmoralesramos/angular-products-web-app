import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  public title: string;

  constructor(){
    this.title = 'Pagina no encontrada';
  }
}
