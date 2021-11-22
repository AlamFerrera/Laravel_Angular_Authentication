import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };
  public error = [];

  constructor(private jarwis:JarwisService,
              private token:TokenService,
              private router:Router) { }

  ngOnInit(): void {}

  onSubmit(){
    return this.jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }

  handleError(error){
    this.error = error.error.errors;
  }

}
