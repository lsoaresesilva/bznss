import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MissionListPage } from './mission-list';

@NgModule({
  declarations: [
    MissionListPage,
  ],
  imports: [
    IonicPageModule.forChild(MissionListPage),
  ],
})
export class MissionListPageModule {}
