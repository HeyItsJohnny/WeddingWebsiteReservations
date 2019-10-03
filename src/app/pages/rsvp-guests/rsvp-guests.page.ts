import { Component } from '@angular/core';
import { RsvpGuest, RsvpGuestService } from 'src/app/services/rsvp-guest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from 'ionic-angular';
import { Rsvp, RsvpService } from 'src/app/services/rsvp.service';

@Component({
  selector: 'app-rsvp-guests',
  templateUrl: './rsvp-guests.page.html',
  styleUrls: ['./rsvp-guests.page.scss'],
})
export class RsvpGuestsPage{

  rsvpGuests: RsvpGuest[];
  rsvpId = null;

  currentRsvp: Rsvp = {
    Name: '',
    Email: '',
    RSVPCode: '',
    SearchName: '',
    SearchEmail: '',
    SearchRSVPCode: '',
    PhoneNo: '',
    Address1: '',
    Address2: '',
    AddressCity: '',
    AddressState: '',
    AddressPostCode: '',
    NumberOfGuests: 0,
    AttendingOption: ''
  };

  constructor(
    private rsvpGuestService: RsvpGuestService,
    private route: ActivatedRoute,
    private router: Router,
    private rsvpService: RsvpService,
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
