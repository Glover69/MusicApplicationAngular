import { Component, OnInit } from '@angular/core';
import { AlbumDetails, CategorySingleObject, SliderDetails } from 'src/app/lib/models/models';
import { MusiclistThreat } from 'src/app/services/musiclistThreat.service';

@Component({
  selector: 'app-singlecategoryitem',
  templateUrl: './singlecategoryitem.component.html',
  styleUrls: ['./singlecategoryitem.component.css']
})
export class SinglecategoryitemComponent implements OnInit {



  public DetailsThreat : any[] = [];

  constructor(private listThreat: MusiclistThreat ){}

  ngOnInit(){

    this.listThreat.getDetails()
    .subscribe(data => this.DetailsThreat = data);

  }

   //@ts-ignore
  currentAlbum: AlbumDetails = null;


  SingleObject : CategorySingleObject[] = [

    {id: 7, image: "assets/images/threat.jpeg", title: "Threat", artist: "Rex Orange County", albumid: 7},
    {id: 1, image: "assets/images/igorbg.jpeg", title: "IGOR", artist: "Tyler, the Creator", albumid: 1},
    {id: 8, image: "assets/images/asabg.png", title: "V", artist: "Asa", albumid: 8},
    {id: 9, image: "assets/images/Drake-21-Savage-Her-Loss-Album.webp", title: "Her Loss", artist: "Drake & 21 Savage", albumid: 9},
    {id: 3, image: "assets/images/simzalbum.webp", title: "NO THANK YOU", artist: "Little Simz", albumid: 3},
    {id: 6, image: "assets/images/hugo.webp", title: "HUGO", artist: "Loyle Carner", albumid: 6},

] 

musicdetails: AlbumDetails[] = [
  { id: 1, image: "assets/images/igorbg.jpeg", title: "IGOR", subdetail1: "Tyler, the Creator", subdetail2: "2019", subdetail3: "Hip-Hop/Rap", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },
  { id: 2, image: "assets/images/20000000179449-8-1500x1500.webp", title: "Permanent Damage", subdetail1: "Joesef", subdetail2: "2023", subdetail3: "Alternative", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },
  { id: 3, image: "assets/images/simzalbum.webp", title: "NO THANK YOU", subdetail1: "Little Simz", subdetail2: "2022", subdetail3: "Hip-Hop", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },
  { id: 4, image: "assets/images/kendrickalbum.webp", title: "Mr. Morale And The Big Steppers", subdetail1: "Kendrick Lamar", subdetail2: "2022", subdetail3: "Hip-Hop/Rap", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },
  { id: 5, image: "assets/images/bubbacover.jpg", title: "BUBBA", subdetail1: "KAYTRANDA", subdetail2: "2019", subdetail3: "Electronic", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },
  { id: 6, image: "assets/images/hugo.webp", title: "HUGO", subdetail1: "Loyle Carner", subdetail2: "2022", subdetail3: "Hip-Hop/Rap", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },
  { id: 7, image: "assets/images/threat.jpeg", title: "Threat", subdetail1: "Rex Orange County", subdetail2: "2022", subdetail3: "Alternative", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },
]

}



