
import { Component ,Input,Output,EventEmitter} from "@angular/core";

@Component({
    selector: 'app-count',
    templateUrl:'./count.component.html',
    styleUrls:['./count.component.css'],
})


export class CountComponent
{   
    
    onButtonValue : string = 'All';

    @Output()
    ButtonEventEmitter: EventEmitter<string>= new EventEmitter<string>();

    @Input()
    all : number = 0;

    @Input()
    male : number = 0;

    @Input()
    female : number = 0;


    UpdateButtonValue()
    {
        this.ButtonEventEmitter.emit(this.onButtonValue);
        //  console.log(this.onButtonValue);
    }
}



/*

    teps for outputting value form child comp to parent comp 
step 1 : 
import { Component ,Input,Output,EventEmitter} from "@angular/core";

step 2 :  create obj of event emitter 
@Output()
    ButtonEventEmitter: EventEmitter<string>= new EventEmitter<string>();

step 3:     
function for updating of importing payload to event 

UpdateButtonValue()
    {
        this.ButtonEventEmitter.emit(this.onButtonValue);
        
    }


step 4 : getting value from radio button and seding bank to property
<input type="radio" name="counts" value="All" [(ngModel)]="onButtonValue" (change)="UpdateButtonValue()"> 

step 5 : add the event in parent-comp chlid selector 

<app-count(ButtonEventEmitter)="updateButtonClickValue($event)"></app-count>

step 6: keep eye on selectd radio button value in parent comp 

buttonvalue: string = 'All';

step 7 : update the value as per button value changed

 updateButtonClickValue(empUpdateValue:string): void
  {
    this.buttonvalue = empUpdateValue;
  }




 */

