import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from "../pages/list/list";
import { MissionListPage } from "../pages/mission-list/mission-list";
import { IntroPage } from "../pages/intro/intro";
import { Storage } from "@ionic/storage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MissionListPage;
  loader:any;

  pages: Array<{title: string, component: any}>;

  constructor(public storage: Storage, public loadingCtrl: LoadingController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.presentLoading();
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage.get('introShown').then((result) => {
 
        if(result){
          this.rootPage = MissionListPage;
        } else {
          this.rootPage = IntroPage;
          //this.storage.set('introShown', true);
        }
 
        this.loader.dismiss();
 
      });
    });
  }

  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Começando..."
    });
 
    this.loader.present();
 
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
