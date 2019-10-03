import { Component } from '@angular/core';
import { RsvpGuest, RsvpGuestService } from 'src/app/services/rsvp-guest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from 'ionic-angular';

@Component({
  selector: 'app-rsvp-diet-restrictions',
  templateUrl: './rsvp-diet-restrictions.page.html',
  styleUrls: ['./rsvp-diet-restrictions.page.scss'],
})
export class RsvpDietRestrictionsPage {
  rsvpGuests: RsvpGuest[];
  rsvpId = null;

  constructor(
    private rsvpGuestService: RsvpGuestService,
    private route: ActivatedRoute,
    private router: Router,
    public events: Events
  ) { }

  ionViewWillEnter() {
    this.getEventData();
  }

  getEventData() {
    this.rsvpId = this.route.snapshot.params['id'];
    if (this.rsvpId)  {   
      this.events.publish('guest:created', this.rsvpId);  
      var guests = this.rsvpGuestService.getRsvpGuestsForSearch().subscribe (res => {
        this.rsvpGuests = res;
        guests.unsubscribe();
      });
    }
  }

  submitDietRestrictions() {
    for(const item of this.rsvpGuests) {
      var input = (<HTMLInputElement>document.getElementById(item.id)).value;
      this.rsvpGuestService.updateRsvpGuestDietaryRestrictions(input,item.id);
    }
    this.router.navigate(['home']);
  }
}
