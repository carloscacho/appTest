import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the LocalstorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LocalstorageProvider {
  public config = {
    showSlides: false,
    name: "",
    username: "",
    token: "", 
    pictureUrl: "",
    userId: ""
  }

  constructor() {

  }

  //capturar dados do local storage
  getConfigData(): any {
    return localStorage.getItem("config") || {}
  }

  //gravar dados no local storage
  setConfigData(showSlides?: boolean, name?: string, username?: string,
    token?: string, pictureUrl?:string, userId?:string) {

    let config = {
      showSlides: false,
      name: "",
      username: "",
      token: "", 
      pictureUrl: "",
      userId: ""
    }

    if (showSlides) {
      config.showSlides = showSlides;
    }

    if (name) {
      config.name = name;
    }

    if (username) {
      config.username = username;
    }

    if (token) {
      config.token = token;
    }
    
    if (pictureUrl) {
      config.pictureUrl = pictureUrl;
    }

    if(userId){
      config.userId = userId;
    }


    localStorage.setItem("config", JSON.stringify(config))
  }

}
