import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent  {


  name:string = "sohel";
    age:number = 23;
    location : string = "solapur"

    showDetails : boolean = false;

  showData() : void
  {
    this.showDetails = !this.showDetails;
  }

}
