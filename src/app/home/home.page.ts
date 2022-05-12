import { Component } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private streamingMedia: StreamingMedia) {}

  startVideo(){
    const options: StreamingVideoOptions = {
      successCallback: () => { console.log();},
      errorCallback: () => { console.log();},
      orientation:'portrait'
    };
    this.streamingMedia.playVideo('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720_1mb.mp4', options);

  }
  startAudio(){
    const options: StreamingAudioOptions = {
      successCallback: () => { console.log();},
      errorCallback: () => { console.log();},
      initFullscreen: false,
    };
    this.streamingMedia.playAudio
    ('https://cdn.pixabay.com/download/audio/2022/01/18/audio_dcb90a7b04.mp3?filename=the-future-bass-15017.mp3', options);

  }
  stopAudio(){
    this.streamingMedia.stopAudio();

  }

}

