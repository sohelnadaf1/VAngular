import { Component} from '@angular/core';



@Component({
  selector: 'app-style-bind',
  templateUrl: './style-bind.component.html',
  
})
export class StyleBindComponent  {

  fontSize : number= 20;

  isBold : boolean= true;
  isItalic : boolean = true;

  applyStyle()
  {
  let styleclass = {
      "font-weight": this.isBold ? 'bold':'normal',
      "font-style":this.isItalic ? 'italic':'normal'
    };
    return styleclass;
  }
 
}
