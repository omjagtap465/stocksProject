import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'st-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  onLogin() {
    console.log(this.form.value);
    const loginRequestUser: LoginRequestInterface = {
      email: this.form.value.username || ' ',
      password: this.form.value.password || ' ',
    };
    this.authService
      .login(loginRequestUser)
      .subscribe((data) => console.log(data));
  }
}
//  Creating store
// local Storage Get Set Service
// Then Creating Loader
//  routing after Login
