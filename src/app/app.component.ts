import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from "../pages/intro/intro";
import { LocalstorageProvider} from "../providers/localstorage/localstorage"
import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";
import firebase from 'firebase';



@Component({
  templateUrl: 'app.html',
  providers:[
    LocalstorageProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, LocalstorageProvider: LocalstorageProvider) {
    firebase.initializeApp({
      apiKey: "AIzaSyBi-PhNzJdzDjPcAbX16wTZwcRdMbV_5qo",
      authDomain: "movie-ionic-48e04.firebaseapp.com",
      databaseURL: "https://movie-ionic-48e04.firebaseio.com",
      projectId: "movie-ionic-48e04",
      storageBucket: "movie-ionic-48e04.appspot.com",
      messagingSenderId: "562082267768"
  });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.rootPage = LoginPage;

      //let config = LocalstorageProvider.getConfigData();
      //if(config = null){
       // this.rootPage = IntroPage;
      //  LocalstorageProvider.setConfigData(true);
      //}else{
      //  this.rootPage = TabsPage;
     // }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
