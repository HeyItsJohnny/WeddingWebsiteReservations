import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-test',
  templateUrl: './home-test.page.html',
  styleUrls: ['./home-test.page.scss'],
})
export class HomeTestPage implements OnInit {

  constructor(public menuController: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuController.enable(false);
  }

}
