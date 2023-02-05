import { Component, OnInit } from '@angular/core';
import { MusiclistThreat } from 'src/app/services/musiclistThreat.service';



@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css']
})
export class MusiclistComponent implements OnInit {

  public DetailsThreat : any[] = [];
  
  

  constructor(private listThreat: MusiclistThreat){}

  ngOnInit(){
    this.listThreat.getDetails()
    .subscribe(data => this.DetailsThreat = data);

    

  }
 

}
