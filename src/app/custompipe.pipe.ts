import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cust'
})
export class CustompipePipe implements PipeTransform {

  transform(value: number): string {
    
    if(value >=100)
    {
      return 'gold customer';
    }else{
      return 'normal customer';
    }
  }

}
