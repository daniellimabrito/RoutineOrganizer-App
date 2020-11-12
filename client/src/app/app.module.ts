import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuotesComponent } from './quotes/quotes.component';
import { AgendaFormComponent } from './agenda-form/agenda-form.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DatepickermonthComponent } from './datepickermonth/datepickermonth.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';
import { AgendaService } from './_services/agenda.service';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarFormComponent } from './calendar-form/calendar-form.component';
import { CalendarModuleModule } from './calendar-module/calendar-module.module';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
      QuotesComponent,
      AgendaFormComponent,
      DatepickermonthComponent,
      FormDebugComponent,
      CalendarComponent,
      CalendarFormComponent,
      NavComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [AgendaService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
