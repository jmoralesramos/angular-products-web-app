import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductoListComponent } from './components/producto/producto-list.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductoListComponent},
    {path: '**', component: ErrorComponent}
];
