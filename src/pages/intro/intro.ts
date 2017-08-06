import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MissionListPage } from "../mission-list/mission-list";
import { ToastController, Slides } from 'ionic-angular';
/**
 * Generated class for the IntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  @ViewChild(Slides) slides: Slides;

  name: string;

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.name = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  goToHome() {
    if (this.name == "") {
      let toast = this.toastCtrl.create({
        message: 'É preciso responder a pergunta.',
        duration: 3000,
        position:"middle"
      });
      toast.present();
    } else {
      this.navCtrl.setRoot(MissionListPage);
    }
  }

  next(){
    this.slides.slideNext();
  }

}
