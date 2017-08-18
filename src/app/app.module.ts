import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MissionPage } from "../pages/mission/mission";
import { MissionListPage } from "../pages/mission-list/mission-list";
import { MissionService } from "./services/mission.service";
import { SanitizeHtmlPipe } from "./pipes/sanitize-html";
import { MissionAccomplishedService } from "./services/mission-accomplished.service";
import { EnterpreneurService } from "./services/enterpreneur.service";
import { IonicStorageModule } from '@ionic/storage';
import { IntroPage } from "../pages/intro/intro";

import { AdMobFree } from '@ionic-native/admob-free';


@NgModule({
  declarations: [
    MyApp,
    ListPage,
    MissionPage,
    MissionListPage,
    IntroPage,
    SanitizeHtmlPipe
   ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    MissionPage,
    MissionListPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MissionService,
    MissionAccomplishedService,
    EnterpreneurService,
    AdMobFree
  ]
})
export class AppModule {}
