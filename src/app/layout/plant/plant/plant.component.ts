import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from 'src/shared/firestore.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.less']
})
export class PlantComponent implements OnInit {

  constructor(private firestore: FirestoreService) { }
  

  @Input() plant;
  name: string;
  level: number;
  desc: string;


  ngOnInit(): void {
    console.log(this);
    this.name = this.plant.name;
    this.desc = this.plant.desc;
    this.level = this.plant.level;
  }

}
