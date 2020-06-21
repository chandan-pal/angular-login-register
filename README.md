<h1 align="center">
  <br>
  
  <br>
  angular-login-register
  <br>
</h1>

<h4 align="center">an angular application template for login and registration</h4>


<p align="center">
    <a alt="Angular">
        <img src="https://img.shields.io/static/v1?label=Angular&message=9.0.7&color=blue" />
    </a>
    <a alt="Typescript">
        <img src="https://img.shields.io/static/v1?label=Typescript&message=3.7.5&color=brightgreen" />
    </a>
    <a alt="JWT">
        <img src="https://img.shields.io/static/v1?label=JWT&message=0.9.1&color=green" />
    </a>
</p>


## Overview ##
This is an angular application to demonstrate user registration and authentication functionality using JWT (JSON Web Tokens).

This application can be used as a template to create a standalone client side login and registration UI.

This application is uses backened server built in my earlier project, which authenticates a user and generates JSON Web Token for valid request. This project can be accessed from the follwing link - <a href="https://github.com/chandan-pal/login-register-jwt-mysql"><b>login-register-jwt-mysql</b></a>.

In this project authentication requests are made to the authentication server which is a spring boot application.

Any other authentication server can also be used with this client side angular application as long as it is able to authenticate a user and send back a valid token.

## features ##
  - Registration and login UI using angular.
  - Utilizes angular modules.
  - Utilizes angular routing.
  - Utilizes angular Components.
  - Utilizes angular Services.
  - Utilizes angualar forms modules to provide most checks on registrations and login forms.
  - Stores token in local storage for client side session check.
  - Utilizes HTTPInterceptor to attach token in 'Authorization' header once user is logged in.
  - Gives logout functionality (by removing user tokens from local storage).
  - Can be plugged with any authentication srever which is capable of sending valid tokens after autheticating a user.
  - Uses Authentication guard (implementing canActivate) to check and redirect to login if user session is not valid.


## Setting up Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
