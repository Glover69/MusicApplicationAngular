import { Component, OnInit } from '@angular/core';
import { AlbumDetails } from './lib/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 
  //@ts-ignore
  AlbumDetail : AlbumDetails | any;
  
  title = 'musicApp';

  // musicdetails : AlbumDetails[] = [
  //   {image: "assets/images/igorbg.jpeg", title: "IGOR", subdetail1: "Tyler, the Creator", subdetail2: "2019", subdetail3: "Hip-Hop/Rap", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..."},
  //   {image: "assets/images/20000000179449-8-1500x1500.webp", title: "Permanent Damage", subdetail1: "Joesef", subdetail2: "2023", subdetail3: "Alternative", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..."},
  //   {image: "assets/images/igorbg.jpeg", title: "IGOR", subdetail1: "Tyler, the Creator", subdetail2: "2019", subdetail3: "Hip-Hop/Rap", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..."},
  //   {image: "assets/images/igorbg.jpeg", title: "IGOR", subdetail1: "Tyler, the Creator", subdetail2: "2019", subdetail3: "Hip-Hop/Rap", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..."},
  //   {image: "assets/images/igorbg.jpeg", title: "IGOR", subdetail1: "Tyler, the Creator", subdetail2: "2019", subdetail3: "Hip-Hop/Rap", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..."},

  // ]
}
