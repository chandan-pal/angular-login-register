import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public overlayDisplay = false;
	public loginError = true;

	public loginForm: FormGroup;

  constructor(
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

  }

}
