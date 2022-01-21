import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculaterComponent } from './calculater/calculater.component';

const routes: Routes = [
 
  {
    path: '', component:MainPageComponent
  },
  {
    path:'calculater',component: CalculaterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
