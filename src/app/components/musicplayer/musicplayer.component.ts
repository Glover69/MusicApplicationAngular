import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { AudioPlayer } from 'src/app/services/audioplayer.service';


@Component({
  selector: 'app-musicplayer',
  templateUrl: './musicplayer.component.html',
  styleUrls: ['./musicplayer.component.css']
})
export class MusicplayerComponent {

  seekslider = document.querySelector('.seek-slider');
  currTime = document.querySelector('.current-time');
  totalDuration = document.querySelector('.total-duration');

  seekto(){

    //@ts-ignore
    this.seekto = this.currTime.duration * (this.seekslider.value / 100);
    //@ts-ignore
    this.currTime.currentTime = this.seekto

  }
 


  //Access audio player dom
  //@ts-ignore
  @ViewChild('audioPlayer', { static: true }) audioPlayer: ElementRef;

  

  public AudioPlayer : any[] = [];

  isPlaying = false;
  togglePlayButtonAsset =  "assets/images/Play.png"

  //@ts-ignore
  @ViewChild('musicPlayer') musicPlayer: ElementRef;

  
  
  constructor(private playMusic: AudioPlayer){

    //@ts-ignore
    window.navigator.bluetooth.getAvailability().then(isAvailable => {
      console.log("adasdasdasd", isAvailable);

      if(isAvailable){
        let options = {
          acceptAllDevices: true,
          optionalServices: ["battery_service"]
        };
        
        //@ts-ignore
        navigator.bluetooth
          .requestDevice(options)
          .then(function(device : any) {
            console.log("Name: " + device.name);
            // Do something with the device.
          })
          .catch(function(error : any) {
            console.log("Something went wrong. " + error);
          });
      }

    });
  }

  url = "/assets/music/1660418627060687327THREAT-140_-_audio_only_medium.m4a"
  ngOnInit(){
    this.playMusic.getDetails()
    .subscribe(data => this.AudioPlayer = data);

  }
 
  togglePlay(){
    this.isPlaying = !this.isPlaying;
    this.togglePlayButtonAsset =  this.isPlaying ? "assets/images/Pause.png" : "assets/images/Play.png"

    console.log(this.togglePlayButtonAsset, this.isPlaying);

    // console.log(this.musicPlayer.nativeElement.play());

    if(this.isPlaying){
      this.musicPlayer.nativeElement.play()
    }else{
      this.musicPlayer.nativeElement.pause()
    }

    console.log(this.musicPlayer)
  }

}
