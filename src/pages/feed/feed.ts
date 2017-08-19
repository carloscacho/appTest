import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from "../../providers/movies/movies";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoviesProvider
  ]
})
export class FeedPage {
  //variables 
  public feed = {
    title: "Carlos Emilio",
    date: "Novembro 5, 2017",
    description: "Estou criando uma maquina do tempo, hahahaha",
    likes: 12,
    comments: 20,
    time_public: "11h antes"
  }

  //get list filmes
  public list_movies = new Array<any>();

  public nameUser: string = "Fulano de Tal";
  public dataAtual: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private moviesProvider: MoviesProvider) {
  }


  public getDateNow(): void {
    var date = new Date()
    this.dataAtual = date.toDateString()

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.getDateNow()
    this.moviesProvider.getLatestMovies().subscribe(data => {
      const response = (data as any);
      const obj_ret = JSON.parse(response._body)
      this.list_movies = obj_ret.results;
      console.log(obj_ret);
    }, error => {
      console.log("deu erro" + error);
    }
    )
  }

}
