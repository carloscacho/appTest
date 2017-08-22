import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalstorageProvider } from "../../providers/localstorage/localstorage";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers:[
    LocalstorageProvider
  ]
})
export class ContactPage {

  public userProfile: any;

  constructor(public navCtrl: NavController, LocalstorageProvider: LocalstorageProvider) {
    this.userProfile = JSON.parse(LocalstorageProvider.getConfigData())
    console.log("#data " + this.userProfile )
  }

}
