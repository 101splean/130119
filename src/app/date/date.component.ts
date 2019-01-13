import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  visibility: boolean = true;
  toggle (){
    this.visibility = !this.visibility;
  };
  text: string = "Hello World!";
  isCollapsed: boolean = true;
  loggedIn = false;
  items = ["Angular", "React", "Vue", "Bootstrap", "Node.js"]
  message: string = new Date().toDateString();
  currentTime: string;

  constructor() { 
    setInterval(()=>{
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  }
  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  };

  ngOnInit() {
  }

}
