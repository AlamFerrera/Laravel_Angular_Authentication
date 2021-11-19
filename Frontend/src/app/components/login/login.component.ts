import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  private apiUrl = "http://127.0.0.1:8000/api";
  public error = null;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    return this.http.post(`${this.apiUrl}/login`,this.form)
            .subscribe(
              data => console.log(data),
              error => this.handleError(error)
            );
  }

  handleError(error){
    this.error = error.error.error;
  }

}
