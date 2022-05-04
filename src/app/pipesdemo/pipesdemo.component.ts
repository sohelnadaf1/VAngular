import { Component} from '@angular/core';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent  {

    constructor()
    {
      

    }

   
    employee :any[] =[
      {name:'sohel',age:23,salary:24000,DOJ:'03/27/20022'},
      {name:'safia',age:27,salary:24000,DOJ:'4/24/20022'},
      {name:'shivam',age:23,salary:24000,DOJ:'6/9/20022'},
      {name:'raju',age:23,salary:24000,DOJ:'8/04/20022'}
    ];
      
    
  
    amount : number = 100;

}
