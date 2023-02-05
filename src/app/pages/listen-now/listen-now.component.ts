import { Component, OnInit } from '@angular/core';
import { SliderDetails } from 'src/app/lib/models/models';
import { MusiclistThreat } from 'src/app/services/musiclistThreat.service';


@Component({
  selector: 'app-listen-now',
  templateUrl: './listen-now.component.html',
  styleUrls: ['./listen-now.component.css']
})
export class ListenNowComponent implements OnInit {

  count = 0;

  public DetailsThreat : any[] = [];

  

  
  //@ts-ignore
  currentSlide : SliderDetails = null;

  constructor(private listThreat: MusiclistThreat){
    this.currentSlide  = this.musicdetails[0];

     setInterval(()=>{
       this.currentSlide = this.musicdetails[this.count++ % this.musicdetails.length];
     }, 3000)

     
  }

  ngOnInit(){

    this.listThreat.getDetails()
    .subscribe(data => this.DetailsThreat = data);

  }
  
  musicdetails : SliderDetails[] = [
    {id : 1, image: "assets/images/28276.jpg", title: "IGOR", subdetail1: "Tyler, the Creator", subdetail2: "2019", subdetail3: "Hip-Hop/Rap"},
    {id : 2, image: "assets/images/joesef.jpg", title: "Permanent Damage", subdetail1: "Joesef", subdetail2: "2023", subdetail3: "Alternative"},
    {id : 3, image: "assets/images/simz.jpeg", title: "NO THANK YOU", subdetail1: "Little Simz", subdetail2: "2022", subdetail3: "Hip-Hop"},
    {id : 4, image: "assets/images/kl.png", title: "Mr. Morale And The Big Steppers", subdetail1: "Kendrick Lamar", subdetail2: "2022", subdetail3: "Hip-Hop/Rap"},
    {id : 5, image: "assets/images/kaytranda.jpeg", title: "BUBBA", subdetail1: "KAYTRANDA", subdetail2: "2019", subdetail3: "Electronic"}
  ]      
}