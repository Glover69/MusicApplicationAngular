import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeconversion'
})
export class TimeconversionPipe implements PipeTransform {

  transform(audioTime: number): string {
    let audioLengthMin = ( "0" + Math.floor( audioTime / 60)).slice(-2);
    let audioLengthSec = ( "0" + audioTime % 60).slice(-2);
    return `${audioLengthMin}:${audioLengthSec}`

  }
}
