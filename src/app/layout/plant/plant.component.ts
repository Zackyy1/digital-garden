import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';
import { FirestoreService } from 'src/shared/firestore.service';
import * as $ from 'jquery';
import { GeneralService } from 'src/shared/general.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.less']
})
export class PlantComponent implements OnInit {

  isLoggedIn: boolean;
  plantSelector: string = '[data-js-plant]'

  constructor(
    private general: GeneralService,
    private auth: AuthService) {
      
    auth.auth.user.subscribe(e => {
      this.isLoggedIn = e ? true : false;
    })

  }
  

  @Input() plant;
  name: string;
  level: number;
  desc: string;
  color: string;
  id: string;
  
  ngOnInit(): void {
    this.name = this.plant.name;
    this.desc = this.plant.desc;
    this.id = this.plant.id;
    this.level = this.plant.level;
    this.color = this.plant.color;

  }

  redirectToPlantOverview = (plant) => {
    
    console.log('trying to redirect to plant', plant);

    
  }

}
