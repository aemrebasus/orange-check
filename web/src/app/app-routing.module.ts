import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from '@components/components.component';
import { PagesComponent } from '@pages/pages.component';


const routes: Routes = [

  { path: 'app', component: ComponentsComponent },
  { path: '', component: PagesComponent },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
