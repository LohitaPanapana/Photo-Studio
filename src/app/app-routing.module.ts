import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'search', pathMatch:'full',
  },
  {
    path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'random', loadChildren: () => import('./random/random.module').then(m => m.RandomModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
