import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { musicplayer } from '../lib/models/models';



@Injectable({
    providedIn: 'root'
  })
  export class AudioPlayer {

    private _urlAudio: string = "http://localhost:3000/Audiofiles";

    constructor(private httpAudio: HttpClient) { }
  
    getDetails(): Observable<musicplayer[]>{
  
      return this.httpAudio.get<musicplayer[]>(this._urlAudio);
    }

  }