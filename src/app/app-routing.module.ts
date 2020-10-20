import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GardenComponent } from './layout/garden/garden.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PlantOverviewPageComponent } from './plant-overview-page/plant-overview-page.component';


const routes: Routes = [

  { path: 'login', component: LoginPageComponent },
  { path: 'plant/:id', component: PlantOverviewPageComponent },
  { path: 'garden', component: GardenComponent },
  { path: '', redirectTo: '/garden', pathMatch: 'full' },
  { path: '**', redirectTo: '/garden'}

] // redirect to `first-component`];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
