import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent {
  speakers: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.speakers = db.collection('speakers', ref => ref.orderBy('name')).valueChanges();
  
  }
}
