import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DispacherComponent } from './controller/dispacher.component';

const routes: Routes = [
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'app', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
  { path: '', component: DispacherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
