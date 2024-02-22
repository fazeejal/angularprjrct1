import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serviceproject1Service {

  constructor() { }
  users(){
    return[
      {name:'Anu',age:22,email:'anu22@gmail.com'},
      {name:'Mariam',age:16,email:'mariam16@gmail.com'},
      {name:'Adyan',age:20,email:'adyan20@gmail.com'},
    ]
  }
}
