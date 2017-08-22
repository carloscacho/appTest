import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
//facebook login
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';
import { LocalstorageProvider} from "../../providers/localstorage/localstorage";


//slides
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
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
  providers:[
    LocalstorageProvider
  ]
})
export class IntroPage {
  userProfile: any = null;
  token: any = null;
  config: any;
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private facebook: Facebook,
    LocalstorageProvider: LocalstorageProvider

  ) 
  {
    //constructor
    this.config = LocalstorageProvider;
  }

  public nextSlide(){
    this.slides.slideNext(1000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  public goToTabsPage(): void {
    this.navCtrl.push(TabsPage)
  }

  public facebookLogin(){
    this.facebook.login(['email']).then( (response) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
            .credential(response.authResponse.accessToken);

        firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
            console.log("Firebase success: " + JSON.stringify(success));
            //this.userProfile = success;
            //this.token = response.authResponse.accessToken;
            
            //save info in database
          this.config.setConfigData(true, success.displayName, success.email,
          response.authResponse.accessToken, success.photoURL, success.uid)
            this.navCtrl.push(TabsPage)
            console.log("passei por aqui")

        })
        .catch((error) => {
            console.log("Firebase failure: " + JSON.stringify(error));
        });

    }).catch((error) => { console.log(error) });
}

}
