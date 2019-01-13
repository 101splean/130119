import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*template: `<h1>Angular routes</h1>
  <nav>
  <a routerLink="">Main page</a>
  <a routerLink="/about">About us...</a>
  <a routerLink="/news">Only good news</a>
  <a routerLink="/price">The lowest prices</a>
  </nav>
  <router-outlet></router-outlet>`*/
})
export class AppComponent {
  userName: string = "";
  response: any;
  constructor (private http: HttpClient){

  };
  search(){
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    })
  }
}
