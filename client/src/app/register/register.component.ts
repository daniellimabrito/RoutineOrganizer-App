import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/User';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  registerForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {validators: this.passwordMatchValidator});
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch' : true};
 }

 register() {

  if (this.registerForm.valid) {
    this.user = Object.assign({}, this.registerForm.value);
  //  console.log(this.user);

    this.authService.register(this.user).subscribe(() => {
      this.alertify.success('Registration successful');
    }, error => {
     // console.log(error.error);
      this.alertify.error(error.error);
    }, () => {
      this.authService.login(this.user).subscribe(() => {
        this.router.navigate(['agendaForm']);
      }, error => {
          console.log(error.error);
          this.alertify.error(error.error);
      });
    });
  }
}

}
