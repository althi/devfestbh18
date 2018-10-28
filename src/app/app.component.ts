import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  speakers: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.speakers = db.collection('speakers').valueChanges();
  }
}
