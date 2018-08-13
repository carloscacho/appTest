import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from "../pages/intro/intro";
import { LocalstorageProvider} from "../providers/localstorage/localstorage"
import { TabsPage } from "../pages/tabs/tabs";
import firebase from 'firebase';



@Component({
  templateUrl: 'app.html',
  providers:[
    LocalstorageProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar,
     splashScreen: SplashScreen, 
     LocalstorageProvider: LocalstorageProvider) {
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

      this.rootPage = TabsPage;

    //  let config = JSON.parse(LocalstorageProvider.getConfigData());
    //  if(config != {}){
    //    if(config.token != ""){
        
    //     LocalstorageProvider.setConfigData(true);
    //     console.log("#config" + config)
    //     this.rootPage = TabsPage ;
    //    }
    //  }else{
    //   this.rootPage = IntroPage;
       
    //  }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
