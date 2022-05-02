import { Component } from "@angular/core";


@Component({
    selector:'app-student',
    templateUrl:'./student.component.html',
    styleUrls:['./student.component.css'],
})

export class StudentComponent
{
    name:string = "sohel";
    age:number = 23;
    location : string = "solapur"
    getname:string = ""
}