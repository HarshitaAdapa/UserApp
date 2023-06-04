import { Component, Input, Output } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayFlag:boolean = true;
  title = 'UserApp';


  sendData(value) {
    this.displayFlag = value;
    console.log("hellooooo"+this.displayFlag);
  }
  changeDisplay(value){
    console.log("inside get data method")
    this.displayFlag = value
  }
  
}
