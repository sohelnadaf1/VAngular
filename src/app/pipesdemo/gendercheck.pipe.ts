import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gch'
})
export class GendercheckPipe implements PipeTransform {

  transform(value: string,gender:string): string {

    if(gender.toLowerCase()=='male')
    {
      return 'mr.' + value;
    }else
    {
      return 'miss.' + value;
    }
  }

}
