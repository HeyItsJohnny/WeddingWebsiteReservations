import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from "angularfire2/auth";

export interface Rsvp {
  id?: string;
  Name: string;
  Email: string;
  RSVPCode: string;
  SearchName: string;
  SearchEmail: string;
  SearchRSVPCode: string;
  PhoneNo: string;
  Address1: string;
  Address2: string;
  AddressCity: string;
  AddressState: string;
  AddressPostCode: string;
  NumberOfGuests: number;
  AttendingOption: string;
}

@Injectable({
  providedIn: 'root'
})

export class RsvpService {

  constructor(
    public db: AngularFirestore,
    private afAuth: AngularFireAuth) { }
  
  getRsvps() {

    return new Promise<any>((resolve, reject) => {
      this.db.collection('Rsvps', ref => ref.orderBy("SearchName")).snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }
  
  getRsvp(id) {
    let rsvpsCollection = this.db.collection('Rsvps');
    return rsvpsCollection.doc<Rsvp>(id).valueChanges();
  }
  
  updateRsvp(rsvp: Rsvp, id: string) {
    var tmp = rsvp;
    tmp.SearchName = rsvp.Name.toLowerCase();
    tmp.SearchEmail = rsvp.Email.toLowerCase();
    tmp.SearchRSVPCode = rsvp.RSVPCode.toLowerCase(); 
    let rsvpsCollection = this.db.collection('Rsvps');
    return rsvpsCollection.doc(id).update(tmp);
  }
  
  addRsvp(rsvp: Rsvp) {
    var tmp = rsvp;
    tmp.SearchName = rsvp.Name.toLowerCase();
    tmp.SearchEmail = rsvp.Email.toLowerCase();
    tmp.SearchRSVPCode = rsvp.RSVPCode.toLowerCase(); 
    let rsvpsCollection = this.db.collection('Rsvps');
    return rsvpsCollection.add(tmp);
  }

  /*getRsvpNameFromSearch(NameToSearch: string) {
    return this.db.collection<Rsvp>('Rsvps', ref => ref.where('Name', '==', NameToSearch).limit(1)).snapshotChanges();
  }

  getRsvpEmailFromSearch(NameToSearch: string) {
    return this.db.collection<Rsvp>('Rsvps', ref => ref.where('Email', '==', NameToSearch).limit(1)).snapshotChanges();
  }*/

  getRsvpCodeFromSearch(NameToSearch: string) {
    return this.db.collection<Rsvp>('Rsvps', ref => ref.where('RSVPCode', '==', NameToSearch).limit(1)).snapshotChanges();
  }

  updateRsvpAttendance(id: string, attendingOption: string){
    let rsvpsCollection = this.db.collection('Rsvps');
    rsvpsCollection.doc(id).update({"AttendingOption": attendingOption});
  }

  updateRsvpInformation(id: string, rsvpEmail: string, rsvpPhoneNo: string){
    let rsvpsCollection = this.db.collection('Rsvps');
    rsvpsCollection.doc(id).update({"Email": rsvpEmail});
    rsvpsCollection.doc(id).update({"PhoneNo": rsvpPhoneNo});
  }

  updateRsvpCoupleNote(id: string, CoupleNotes: String){
    let rsvpsCollection = this.db.collection('Rsvps');
    rsvpsCollection.doc(id).update({"CoupleNotes": CoupleNotes});
  }
  
  removeRsvp(id) {
    let rsvpsCollection = this.db.collection('Rsvps');
    return rsvpsCollection.doc(id).delete();
  }

  searchRSVPName(searchValue){
    return new Promise<any>((resolve, reject) => {
      this.db.collection('Rsvps', ref => ref.where('SearchName', '>=', searchValue)
      .where('SearchName', '<=', searchValue + '\uf8ff').orderBy('SearchName'))
      .snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    })
  }

  searchRSVPEmail(searchValue){
    return new Promise<any>((resolve, reject) => {
      this.db.collection('Rsvps', ref => ref.where('SearchEmail', '>=', searchValue)
      .where('SearchEmail', '<=', searchValue + '\uf8ff').orderBy('SearchEmail'))
      .snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    })
  }

  searchRSVPCode(searchValue){
    return new Promise<any>((resolve, reject) => {
      this.db.collection('Rsvps', ref => ref.where('SearchRSVPCode', '>=', searchValue)
      .where('SearchRSVPCode', '<=', searchValue + '\uf8ff').orderBy('SearchRSVPCode'))
      .snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    })
  }

  searchRSVPAttendance(searchValue){
    return new Promise<any>((resolve, reject) => {
      this.db.collection('Rsvps', ref => ref.where('AttendingOption', '>=', searchValue)
      .where('AttendingOption', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    })
  }

  getAllInvited(){
    return this.getRsvps().then(events => {
      var singleinvite = events.map(a => {
        var allInvited = 0;
        const data = a.payload.doc.data();
        allInvited += data.NumberOfGuests;
        return {
          SingleInvite: allInvited
        }
      });
      var y = 0;
      for (let x of singleinvite) {
        y += +x.SingleInvite;
      }
      return {
        TotalInvited: y
      }
    });
  }
}
