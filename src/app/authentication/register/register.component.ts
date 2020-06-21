import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public loading = false;
  public submitted = false;
  public registrationError = false;
  public registrationSuccess = false;
  public message;
  public registrationForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', ''],
        userEmail: ['', Validators.compose([Validators.required, Validators.email])],
			  password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      }
    )
  }

  onSubmit() {
    this.submitted = true;
    this.registrationError = false;
    this.registrationSuccess = false;
    if (this.registrationForm.invalid)
    {
      return;
    }
    this.loading = true;
    this.authService.register(this.registrationForm.value)
            .pipe(first())
            .subscribe(
                data => {
                  this.loading = false;
                  if (data.error) {
                    this.registrationError = true;
                    this.message = "User already registered!";
                  } else {
                    this.registrationSuccess = true;
                    this.message = "User registered successfully!";
                  }
                },
                error => {
                    this.loading = false;
                    this.registrationError = true;
                    this.message = "Error!";
                }
            );

  }

}
