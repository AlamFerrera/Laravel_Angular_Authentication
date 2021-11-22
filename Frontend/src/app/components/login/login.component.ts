import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email:null,
    password: null
  };
  public error = null;

  constructor(private jarwis:JarwisService,
              private token:TokenService,
              private router:Router,
              private auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    return this.jarwis.login(this.form)
            .subscribe(
              data => this.handleResponse(data),
              error => this.handleError(error)
            );
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error){
    this.error = error.error.error;
  }

}
