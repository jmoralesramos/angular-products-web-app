import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-list',
  imports: [],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent {
  public title: string;

  constructor(){
    this.title = 'Listado de productos';
  }

}
