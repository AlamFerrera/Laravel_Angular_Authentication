import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private apiUrl = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  signup(data){
    return this.http.post(`${this.apiUrl}/signup`,data)
  }

  login(data){
    return this.http.post(`${this.apiUrl}/login`,data)
  }
}
