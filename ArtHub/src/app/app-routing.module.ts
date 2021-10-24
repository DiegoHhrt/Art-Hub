import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'art',
    loadChildren: ()=> import('./Art/art.module').then(m=>m.ArtModule)
  },
  {
    path: 'comics',
    loadChildren: ()=> import('./Comics/comics.module').then(m=>m.ComicsModule)
  },
  {
    path: 'videogames',
    loadChildren: ()=> import('./Videogames/videogames.module').then(m=>m.VideogamesModule)
  },
  {
    path: '**',
    redirectTo: 'art'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
