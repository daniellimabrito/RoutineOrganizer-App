import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaFormComponent } from './agenda-form/agenda-form.component';
import { CalendarFormComponent } from './calendar-form/calendar-form.component';


const routes: Routes = [
  { path: 'agendaForm', component: AgendaFormComponent},
  { path: 'calendarForm', component: CalendarFormComponent},
  { path: '', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
