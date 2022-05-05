import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BindingComponent } from './student/bindingData/binding.component';
import { ClassBind } from './classbinding/cbind.component';
import { StyleBindComponent } from './style-bind/style-bind.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { NgforDirComponent } from './ngfor-dir/ngfor-dir.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { CustompipePipe } from './pipesdemo/custompipe.pipe';
import { SalaryupdatePipe } from './pipesdemo/salaryupdate.pipe';
import { GendercheckPipe } from './pipesdemo/gendercheck.pipe';
import { NestedcomponentComponent } from './nestedcomponent/nestedcomponent.component';
import { CountComponent } from './nestedcomponent/count/count.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    BindingComponent,
    ClassBind,
    StyleBindComponent,
    EventBindingComponent,
    NgforDirComponent,
    PipesdemoComponent,
    CustompipePipe,
    SalaryupdatePipe,
    GendercheckPipe,
    NestedcomponentComponent,
    CountComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
