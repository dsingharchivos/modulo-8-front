import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './Educacion/lista-producto.component';
import { NuevoProductoComponent } from './Educacion/nuevo-producto.component';
import { EditarProductoComponent } from './Educacion/editar-producto.component';


const routes: Routes = [
  {path: '', component: ListaProductoComponent},
  {path: 'nuevo', component: NuevoProductoComponent},
  {path: 'editar/:id', component: EditarProductoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
