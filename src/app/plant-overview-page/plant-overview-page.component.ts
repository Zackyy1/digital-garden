import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase';
import { stringify } from 'querystring';
import { FirestoreService } from 'src/shared/firestore.service';
import { GeneralService } from 'src/shared/general.service';
import * as $ from 'jquery'
@Component({
  selector: 'app-plant-overview-page',
  templateUrl: './plant-overview-page.component.html',
  styleUrls: ['./plant-overview-page.component.less']
})
export class PlantOverviewPageComponent implements OnInit {

  plantId: string;
  plant;

  nameSelector: string = '[data-js-plant-name]';
  longDescSelector: string = '[data-js-plant-long-desc]';
  linkSelector: string = '[data-js-plant-link]';
  levelSelector: string = '[data-js-plant-level]';
  imagesContainerSelector: string = '[data-js-plant-images-container]';



  constructor(
    private general: GeneralService,
    private firestore: FirestoreService
  ) {
   
  }

  ngOnInit(): void {

    this.Init();
  }

  Init = () => {

    let currentUrl = this.general.currentUrl;
    let searchableString = '/plant/';
    let idWithParams = currentUrl.slice(searchableString.length);
    let idWithoutParams = idWithParams.substr(0, idWithParams.indexOf('/') > 0 ? idWithParams.indexOf('/') : idWithParams.length)


    this.plantId = idWithoutParams;

    console.log(this.plantId);
    this.firestore.plants.subscribe((plant) => {
      plant.map(plantObj => {        
        if (plantObj['id'] == this.plantId) {
          this.plant = plantObj;
          console.log('found', plantObj);
          this.displayContent();
          return;
        }
      })
    });

    console.log(this.plant);
    
  }


  displayContent = () => {
      $(this.nameSelector).text(this.plant.name)
      $(this.longDescSelector).text(this.plant.longDesc) 
      $(this.linkSelector).text(this.plant.link)
      $(this.levelSelector).text(this.plant.level)
      // $(this.imagesContainerSelector).text(this.plant.)
  }

  // this.plant = this.firestore.



  // Display correct data here


}
