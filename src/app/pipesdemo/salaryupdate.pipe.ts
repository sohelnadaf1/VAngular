import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryupdate'
})
export class SalaryupdatePipe implements PipeTransform {

  transform(value: number): string {
    
      if(value>=20000)
      {
        return 'eligible '
      }else
      {
          return 'not eligible'
      }
  }

}
