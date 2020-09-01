import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class GracewaService {
  apiUrl = 'https://api.github.com/users/gracewa?access_token=60e4350182686e8ba90e3d2bff49e30b9f2c487d';

  constructor( private http: HttpClient) { }

  getGracewa() {
    return this.http.get('https://api.github.com/users/gracewa');
  }

  getGracewaRepos() {
    return this.http.get('https://api.github.com/users/gracewa/repos');
  }
}