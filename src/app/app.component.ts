import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title="Reuseable Component"
  userDetails=[
    {name:'Yaqoob',email:'yaqoob@gmail.com'},
    {name:'Ahmad',email:'ahmad@gmail.com'},
    {name:'Faiz',email:'faiz@gmail.com'},
    {name:'Nasir',email:'nasir@gmail.com'}
  ]
}
