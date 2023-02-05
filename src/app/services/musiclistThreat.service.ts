import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MusicListDetails } from '../lib/models/models';



@Injectable({
    providedIn: 'root'
  })
  export class MusiclistThreat {

    private _urlThreat: string = "http://localhost:3000/SongsList";

    constructor(private httpThreat: HttpClient) { }
  
    getDetails(): Observable<MusicListDetails[]>{
  
      return this.httpThreat.get<MusicListDetails[]>(this._urlThreat);
    }

  }