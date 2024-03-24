import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { CommonModule, NgIf } from '@angular/common';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { Observable } from 'rxjs';
@Component({
  selector: 'st-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}
  display: Error | undefined;
  resp$: Observable<any> | undefined;
  form = this.formBuilder.group({
    email: [''],
    username: [''],
    password: [''],
  });
  registerFormSubmit() {
    console.log(this.form.value, this.form.status);
    if (
      !this.form.value.email ||
      !this.form.value.username ||
      !this.form.value.password
    ) {
      this.display = Error('Some of the field is Blank');

      return;
    }
    const registerData: RegisterRequestInterface = {
      email: this.form.value.email,
      username: this.form.value.username,
      password: this.form.value.password,
    };
    this.resp$ = this.authService.signUp(registerData);
    this.resp$.subscribe((data) => console.log(data));
  }
}
