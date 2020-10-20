import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Plant } from './general.service';



@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  private plantsCollection: AngularFirestoreCollection<Plant>;
  plants: Observable<Plant[]>;

  constructor(private firestore: AngularFirestore) {
    this.plantsCollection = firestore.collection<Plant>(environment.plantsCollection);

    this.plants = this.plantsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Plant;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addPlant(data) {
    this.plantsCollection.add(data);
  }


}
