import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GardenComponent } from './layout/garden/garden.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PlantComponent } from './layout/plant/plant.component';
import { CreatePlantFormComponent } from './layout/forms/create-plant-form/create-plant-form.component';
import { EditPlantFormComponent } from './layout/forms/edit-plant-form/edit-plant-form.component';
import { PopupComponent } from './layout/popup/popup.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GardenPageComponent } from './garden-page/garden-page.component';
import { PlantOverviewPageComponent } from './plant-overview-page/plant-overview-page.component';


@NgModule({
  declarations: [
    AppComponent,
    GardenComponent,
    PlantComponent,
    CreatePlantFormComponent,
    EditPlantFormComponent,
    PopupComponent,
    HeaderComponent,
    LoginPageComponent,
    GardenPageComponent,
    PlantOverviewPageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
