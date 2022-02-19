import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';

import { AppComponent } from './app.component';
import { RxjsGuideComponent } from './rxjs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,CalendarModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, RxjsGuideComponent,ParentComponent,ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
