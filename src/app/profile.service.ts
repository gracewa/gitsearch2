import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProfileService {
  private username:string;
  
  
  constructor(private http:HttpClient) { 
    this.username = 'gracewa';
  }

  getProfileInfo(){
    return this.http.get('https://api.github.com/users/' + this.username);
}
}