import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public loading = false;
  public submitted = false;
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
        email: ['', Validators.compose([Validators.required, Validators.email])],
			  password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      }
    )
  }

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.invalid)
    {
      return;
    }
    this.loading = true;

  }

}
