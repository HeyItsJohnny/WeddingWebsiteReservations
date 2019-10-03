import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Rsvp, RsvpService } from 'src/app/services/rsvp.service';
import { RsvpGuest, RsvpGuestService } from 'src/app/services/rsvp-guest.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public alertController: AlertController,
    private router: Router,
    public menuController: MenuController) { }


  ionViewWillEnter() {
    this.menuController.enable(false);
  }

  async presentAlert(headerStr: string, messageStr: string) {
    const alert = await this.alertController.create({
      header: headerStr,
      message: messageStr,
      buttons: ['OK']
    });
    await alert.present();
  }
  
  openHome() {
    this.router.navigate(['home']);
  }

  openOurStory(){
    this.router.navigate(['our-story']);
  }

  openDetails() {
    this.router.navigate(['details']);
  }

  openRSVPs() {
    this.router.navigate(['rsvp']);
  }

  openRegistry() {
    this.router.navigate(['registry']);
  }

  openBeta() {
    this.router.navigate(['home-test']);
  }
}
