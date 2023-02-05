import { Component, OnInit } from '@angular/core';
import { CategorySingleObject, Top100Category } from 'src/app/lib/models/models';
import { MusicdetailsService } from 'src/app/services/musicdetails.service';
import { MusiclistThreat } from 'src/app/services/musiclistThreat.service';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  public Details : any[] = [];
  public DetailsThreat : any[] = [];

  constructor(private _100details: MusicdetailsService, private listThreat: MusiclistThreat){}

  ngOnInit(){
    this._100details.getDetails()
    .subscribe(data => this.Details = data);

    this.listThreat.getDetails()
    .subscribe(data => this.DetailsThreat = data);

  }
}



  
  
  

  

  

    

  

  
 

  
  
  


