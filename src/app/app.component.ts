import { Component } from '@angular/core';
import { Serviceproject1Service } from './serviceproject1.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello world';
  users:any;
  constructor(private serviceproject1:Serviceproject1Service){
  this.users=serviceproject1.users();
  }
}
