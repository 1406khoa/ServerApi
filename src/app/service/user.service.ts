import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${environment.api_url}all`);
  }

  getCreateUser(body: any)
  {
    return this.http.post(`${environment.api_url}create`, body).subscribe();
  }
}
