import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})

export class SpeakersComponent {
  speakers: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.speakers = db.collection('speakers', ref => ref.orderBy('name')).valueChanges();
  
  }
}
