import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.page.html',
  styleUrls: ['./our-story.page.scss'],
})
export class OurStoryPage implements OnInit {

  constructor(public menuController: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuController.enable(false);
  }

}
