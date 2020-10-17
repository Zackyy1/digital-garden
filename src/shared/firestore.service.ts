import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  plants

  constructor(private firestore: AngularFirestore) {
    this.plants = firestore.collection('plants').valueChanges();
    this.plants.subscribe(queriedItems => {
      console.log(queriedItems);  
    });
   }

 
}
