import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllCommentsComponent } from '@components/view-all-comments/view-all-comments.component';
import { DispacherComponent } from './controller/dispacher.component';

const routes: Routes = [
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: '', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
  { path: '**', component: ViewAllCommentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
