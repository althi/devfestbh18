import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PartnerComponent } from './partner/partner.component';
import { Quote1Component } from './quote1/quote1.component';
import { Quote2Component } from './quote2/quote2.component';
import { Quote3Component } from './quote3/quote3.component';
import { Quote4Component } from './quote4/quote4.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakerItemComponent } from './speaker-item/speaker-item.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { TicketsComponent } from './tickets/tickets.component';
import { FooterComponent } from './footer/footer.component';
import { EventComponent } from './event/event.component';
import { GdgbhComponent } from './gdgbh/gdgbh.component';
import { PlaceComponent } from './place/place.component';
import { CoductCodeComponent } from './coduct-code/coduct-code.component';
import { Quote5Component } from './quote5/quote5.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PartnerComponent,
    Quote1Component,
    Quote2Component,
    Quote3Component,
    Quote4Component,
    SpeakersComponent,
    SpeakerItemComponent,
    AppComponent,
    TicketsComponent,
    FooterComponent,
    EventComponent,
    GdgbhComponent,
    PlaceComponent,
    CoductCodeComponent,
    Quote5Component
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
