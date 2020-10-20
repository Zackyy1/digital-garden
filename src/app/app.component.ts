import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/shared/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{


  // Capture URL parameters and redirect accordingly

  constructor(private general: GeneralService) {

  }

  ngOnInit() {
 
    
  }
  
  
  title = 'digital-garden';
}
