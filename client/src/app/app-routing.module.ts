import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaFormComponent } from './agenda-form/agenda-form.component';
import { CalendarFormComponent } from './calendar-form/calendar-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },

  { path: 'home', component: HomeComponent, data: {animation: 'Home'}},
  { path: 'agendaForm', component: AgendaFormComponent, data: {animation: 'AgendaForm'}},
  { path: 'calendarForm', component: CalendarFormComponent, data: {animation: 'CalendarForm'}},
  { path: 'login', component: LoginComponent, data: {animation: 'Login'}},
  { path: 'register', component: RegisterComponent, data: {animation: 'Register'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
