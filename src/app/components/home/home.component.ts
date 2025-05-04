import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public titulo: string;

  constructor(){
    this.titulo = 'Webapp de Productos con Angular';
  }

  ngOnInit(){
    console.log('La pagina principal se ha cargado');
  }
}
