import { Injectable } from "@angular/core";
import { Iemployee } from "./employee";

@Injectable()

export class EmployeeService
{
    getemployee(): Iemployee[]
    {
        return [
            {name:'sohel',gender:'Male', age:23,salary:24000,DOJ:'03/27/20022'},
            {name:'safia',gender:'Female',age:27,salary:24000,DOJ:'4/24/20022'},
            {name:'shivam',gender:'Male',age:23,salary:24000,DOJ:'6/9/20022'},
            {name:'raju',gender:'Male',age:23,salary:18000,DOJ:'8/04/20022'},
            {name:'jaishree',gender:'Female',age:23,salary:18000,DOJ:'9/22/20022'}
        ];
    }
}