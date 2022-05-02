import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BindingComponent } from './student/bindingData/binding.component';
import { ClassBind } from './classbinding/cbind.component';
import { StyleBindComponent } from './style-bind/style-bind.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    BindingComponent,
    ClassBind,
    StyleBindComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
