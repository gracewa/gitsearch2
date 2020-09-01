import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProfileService {
  private username:string;
  private clientid = '0674d8aa34ad610f26cb958d1ceaf1851d6d48c7';
  
  constructor(private http:HttpClient) { 
    console.log('service is now ready!');
    this.username = 'gracewa';
  }

  getProfileInfo(){
    return this.http.get('https://api.github.com/users/' + this.username + '?access_token=' + this.clientid);
}
}