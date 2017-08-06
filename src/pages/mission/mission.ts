import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Mission } from "../../app/models/mission";
import { MissionService } from "../../app/services/mission.service";
import { MissionAccomplished } from "../../app/models/mission-accomplished";
import { MissionAccomplishedService } from "../../app/services/mission-accomplished.service";
import { MissionListPage } from "../mission-list/mission-list";

/**
 * Generated class for the MissionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-mission',
  templateUrl: 'mission.html',
})
export class MissionPage {
  mission: Mission;
  response: MissionAccomplished;

  constructor(public missionAccomplishedService: MissionAccomplishedService, public alertCtrl: AlertController, public missionService: MissionService, public navCtrl: NavController, public navParams: NavParams) {
    this.mission = this.missionService.get(this.navParams.get("id"));
    this.response = new MissionAccomplished("", this.mission);
    this.missionAccomplishedService.getByMission(this.mission).subscribe(result => {
      if (result != null){
        this.response = result;
      }
    });


  }

  ionViewDidLoad() {

  }

  answer() {
    if (this.response.response != "") {
      this.missionAccomplishedService.save(this.response).subscribe(result=>{
        this.navCtrl.push(MissionListPage);
      });
      
    } else {
      let alert = this.alertCtrl.create({
        title: 'Oops, faltou resolver esta missão!',
        subTitle: 'Antes de prosseguir você precisa dar uma resposta para esta missão!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
