import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { Top100Category } from '../lib/models/models';



@Injectable({
  providedIn: 'root'
})
export class MusicdetailsService {

  private _url: string = "http://localhost:3000/Top100";

  constructor(private http: HttpClient) { }

  getDetails(): Observable<Top100Category[]>{

    return this.http.get<Top100Category[]>(this._url);
  }
}
