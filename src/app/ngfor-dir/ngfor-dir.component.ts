import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-dir',
  templateUrl: './ngfor-dir.component.html',
  styleUrls: ['./ngfor-dir.component.css']
})
export class NgforDirComponent  {

  employees : any[] = [
    {name:'sohel',age:23,code:112},
    {name:'safia',age:17,code:113},
    {name:'shraddha',age:24,code:115}
  ];
  

  

}
