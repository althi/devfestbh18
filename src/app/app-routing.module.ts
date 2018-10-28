import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent }      from './schedule/schedule.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent }
];

@NgModule({
  exports: [ RouterModule ]
})

export class AppRoutingModule {}