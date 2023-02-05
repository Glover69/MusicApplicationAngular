import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PAGE_STATE } from 'src/app/lib/constants/app.constant';
import { AlbumDetails, MusicListDetails } from '../../lib/models/models';


@Component({
  selector: 'app-igor-details',
  templateUrl: './igor-details.component.html',
  styleUrls: ['./igor-details.component.css']
})
export class IgorDetailsComponent implements OnInit {

  ngOnInit(): void {

  }


  pageState: PAGE_STATE = PAGE_STATE.LOADING;

  count = 0;

  //@ts-ignore
  currentAlbum: AlbumDetails = null;

  constructor(
    private route: ActivatedRoute
  ) {



    setInterval(() => {
      this.loadPageData();
    }, 5000)
  }

  //@ts-ignore
  musicdetails: AlbumDetails[] = [
    { id: 1, image: "assets/images/igorbg.jpeg", title: "IGOR", subdetail1: "Tyler, the Creator", subdetail2: "2019", subdetail3: "Hip-Hop/Rap", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },
    { id: 2, image: "assets/images/20000000179449-8-1500x1500.webp", title: "Permanent Damage", subdetail1: "Joesef", subdetail2: "2023", subdetail3: "Alternative", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },
    { id: 3, image: "assets/images/simzalbum.webp", title: "NO THANK YOU", subdetail1: "Little Simz", subdetail2: "2022", subdetail3: "Hip-Hop", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },
    { id: 4, image: "assets/images/kendrickalbum.webp", title: "Mr. Morale And The Big Steppers", subdetail1: "Kendrick Lamar", subdetail2: "2022", subdetail3: "Hip-Hop/Rap", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },
    { id: 5, image: "assets/images/bubbacover.jpg", title: "BUBBA", subdetail1: "KAYTRANDA", subdetail2: "2019", subdetail3: "Electronic", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },
    { id: 6, image: "assets/images/hugo.webp", title: "HUGO", subdetail1: "Loyle Carner", subdetail2: "2022", subdetail3: "Hip-Hop/Rap", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },
    { id: 7, image: "assets/images/threat.jpeg", title: "Threat", subdetail1: "Rex Orange County", subdetail2: "2022", subdetail3: "Alternative", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },
    { id: 8, image: "assets/images/asabg.png", title: "V", subdetail1: "Asa", subdetail2: "2022", subdetail3: "Worldwide", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },
    { id: 9, image: "assets/images/Drake-21-Savage-Her-Loss-Album.webp", title: "Her Loss", subdetail1: "Drake & 21 Savage", subdetail2: "2022", subdetail3: "Hip-Hop/Rap", bio: "From the outset of his fame--or, in his earliest years as an artist, infamy- Tyler, The Creator made no secret of his idolization of Pharrell, citing the work the singer-rapper-producer did as a member of N.E.R.D as one of his biggest musical influences..." },

  ]

  songsdetails: MusicListDetails[] = [
  {id : 1, order: 1, name : "IGOR'S THEME", timeframe : "3:20"},
  {id : 2, order: 2, name : "EARFQUAKE", timeframe : "3:20"},
  {id : 3, order: 3, name : "I THINK", timeframe : "3:20"},
  {id : 4, order: 4, name : "EXACTLY WHAT YOU RUN FROM YOU END UP CHASING", timeframe : "3:20"},
  {id : 5, order: 5, name : "RUNNING OUT OF TIME", timeframe : "3:20"},
  {id : 6, order: 6, name : "NEW MAGIC WAND", timeframe : "3:20"},
  {id : 7, order: 7, name : "A BOY IS A GUN", timeframe : "3:20"},
  {id : 8, order: 8, name : "WHAT'S GOOD", timeframe : "3:20"},
  {id : 9, order: 9, name : "PUPPET", timeframe : "3:20"},
  {id : 10, order: 10, name : "GONE, GONE/ THANK YOU", timeframe : "3:20"},
  {id : 11, order: 11, name : "I DON'T LOVE YOU ANYMORE", timeframe : "3:20"},
  {id : 12, order: 12, name : "ARE WE STILL FRIENDS?", timeframe : "3:20"},

  ]



  loadPageData() {
    this.route.paramMap.subscribe((x) => {

      this.pageState = PAGE_STATE.LOADING;

      const id = parseInt(x.get('id') || "0");
      // this.currentAlbum = this.musicdetails[id]
      // console.log(x.get('id'), "Route");
      // console.log(this.currentAlbum)

      //search
      for (let i = 0; i < this.musicdetails.length; i++) {
        if (id === this.musicdetails[i].id) {
          this.currentAlbum = this.musicdetails[i];
          this.pageState = PAGE_STATE.DONE;
        }
      }

      //@ts-ignore
      this.currentAlbum = this.musicdetails.find(album => album.id === id) || null;

      if (!this.currentAlbum) {
        this.pageState = PAGE_STATE.ERROR;
      }
    })

  }
}
