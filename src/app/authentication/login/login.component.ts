import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public overlayDisplay = false;
	public loginError = false;

	public loginForm: FormGroup;

  constructor(
    private router: Router,
    private authservice: AuthService
	) {
    this.loginForm = new FormBuilder().group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.required],
		});
	}

  ngOnInit(): void {
    //this.overlayDisplay = true;
  }

  onSubmit(): void {

    // if form is not valid do nothing
    if (this.loginForm.invalid)
    {
      return;
    }

    // set loading
    this.overlayDisplay = true;
    this.loginError =  false;

    this.authservice.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
          .subscribe(
            (data) => {
              this.overlayDisplay = false;
              this.router.navigate(['home']);
            },
            (error) => {
              this.overlayDisplay = false;
              this.loginError =  true;
            }
          )
  }

}
