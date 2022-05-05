import { Component, OnInit } from '@angular/core';
import { Iemployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-services-comp',
  templateUrl: './services-comp.component.html',
  styleUrls: ['./services-comp.component.css'],
  providers:[EmployeeService],
})
export class ServicesCompComponent implements OnInit {

  employees: Iemployee[];

  constructor(private _employeeservice: EmployeeService) {
    this.employees = this._employeeservice.getemployee();
    
   }

  ngOnInit(): void {
    
  }

}

/* 

for creating service cli command is 

ng g s nameOfService
-------------------------------------

code flow :

form employee.ts this is model class act as a db 
bassed on employee.ts we can create db objects for emp in services 
in costructor we have to inject employeeServices for invoking data from services
and assin to local varibale to send data to view





*/
