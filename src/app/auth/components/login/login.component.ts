import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/action';
import { combineLatest } from 'rxjs';
import { selectCurrentUser } from '../../store/reducer';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'st-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
})
export class LoginComponent {
  form = this.formBuilder.group({
    username: ['omkar@gmail.com', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  onLogin() {
    console.log(this.form.value);
    const loginRequestUser: LoginRequestInterface = {
      email: this.form.value.username || ' ',
      password: this.form.value.password || ' ',
    };
    this.store.dispatch(authActions.login({ request: loginRequestUser }));
  }
}
