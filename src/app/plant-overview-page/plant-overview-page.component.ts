import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/shared/firestore.service';
import { GeneralService } from 'src/shared/general.service';
import * as $ from 'jquery'
import { AngularFireStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from 'src/shared/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

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
  isLoggedIn: boolean;
  imagesObs: Observable<string | null>;
  images: Array<any> = [];

  constructor(
    private general: GeneralService,
    private auth: AuthService,

    private firestore: FirestoreService,
    private storage: AngularFireStorage,
  ) {
    auth.auth.user.subscribe(e => {
      this.isLoggedIn = e ? true : false;
    })

  }


  async ngOnInit() {


    console.log(this.auth.Auth);
    this.auth.auth.user.subscribe(e => {
      this.Init();
    })


  }

  Init = () => {

    let currentUrl = this.general.currentUrl;
    let searchableString = '/plant/';
    let idWithParams = currentUrl.slice(searchableString.length);
    let idWithoutParams = idWithParams.substr(0, idWithParams.indexOf('/') > 0 ? idWithParams.indexOf('/') : idWithParams.length)


    this.plantId = idWithoutParams;

    this.firestore.plants.subscribe((plant) => {
      plant.map(plantObj => {
        if (plantObj['id'] == this.plantId) {
          this.plant = plantObj;
          this.displayContent();
          return;
        }
      })
    });
    this.getPlantImages();


  }


  displayContent = () => {
    $(this.nameSelector).text(this.plant.name)
    $(this.longDescSelector).text(this.plant.longDesc)
    $(this.linkSelector).attr('href', this.plant.link)
    $(this.levelSelector).text(this.plant.level)
    // $(this.imagesContainerSelector).text(this.plant.)
  }

  getPlantImages = () => {
    console.log('Current auth:', this.auth.isLoggedIn);

    const ref = this.storage.ref(environment.plantsMedia + 'plant-media/' + this.plantId);
    ref.listAll().subscribe(e => {
      e.items.map(r => {
        r.getDownloadURL().then(h => {
          this.images.push(h);
        })
        console.log(this.images);

      })
    })

  }

  reloadPage() {
    window.location.reload();
  }

  uploadFile(event) {
    const files = event.target.files;
    for (let file in files) {
      if (files[file] instanceof File) {
        const randomFileName = this.general.randomString(12);
        const filePath = environment.plantsMedia + '/plant-media/' + this.plantId + '/' + randomFileName;
        const task = this.storage.upload(filePath, files[file]);
      }
    }
    setTimeout(() => {
      this.reloadPage()
    }
      , 700);

  }


}
