import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/User';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  user: User; // = {email : '', password : ''};
  loginForm1: FormGroup;

  constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService, fg: FormBuilder) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      console.log(error.error);
      this.alertify.error(error.error);
    }, () => {
      this.router.navigate(['./agendaForm']);
    });
  }
}
