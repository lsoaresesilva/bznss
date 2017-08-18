import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MissionService } from "../../app/services/mission.service";
import { Mission } from "../../app/models/mission";
import { MissionPage } from "../mission/mission";
import { MissionAccomplished } from "../../app/models/mission-accomplished";
import { MissionAccomplishedService } from "../../app/services/mission-accomplished.service";
import { EnterpreneurService } from "../../app/services/enterpreneur.service";
import { Enterpreneur } from "../../app/models/enterpreneur";
import { Storage } from "@ionic/storage"
import { AdMobFree, AdMobFreeBannerConfig } from "@ionic-native/admob-free";

/**
 * Generated class for the MissionListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-mission-list',
  templateUrl: 'mission-list.html',
})
export class MissionListPage {
  missions: Mission[];
  enterpreneur: Enterpreneur;

  constructor(public toastCtrl:ToastController, public admob: AdMobFree, private storage: Storage, public enterpreneurService: EnterpreneurService, public navCtrl: NavController, public navParams: NavParams, public missionService: MissionService) {
    this.enterpreneur = new Enterpreneur();
    enterpreneurService.get().subscribe(result => {
      this.enterpreneur = result;
      this.missions = missionService.listAll();
    });
    

  }

  

  initializeADMob() {
    let bannerConfig: AdMobFreeBannerConfig = {
      //isTesting: true, // Remove in production
      autoShow: true,
      id: 'ca-app-pub-5294529642418550/7077542659'
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare().then(() => {
      // success
    }).catch(e => {
      
    });
    
  }

  ionViewDidLoad() {
    this.initializeADMob();
    console.log('ionViewDidLoad MissionListPage');
  }

  openMission(mission: Mission) {
    this.navCtrl.push(MissionPage, { id: mission.id })
  }

  tempReset() {
    this.storage.ready().then(() => {
      this.storage.clear();
    });

  }

}
