import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class MusicService {
  audio;
  constructor(
    private apiService: ApiService
  ) {
    this.audio = new Audio();
  }
  findTracks(value) {
    return this.apiService.get(`${this.apiService.prepareUrl('https://api.soundcloud.com/tracks')}&q=${value}`, false)
      .debounceTime(300)
      .distinctUntilChanged()
      .map(res => res.json())
  }

  load(url) {
    this.audio.src = this.apiService.prepareUrl(url);
    this.audio.load();
  }

  play(url) {
    this.load(url);
    this.audio.play()
  }

  xlArtwork(url) {
    return url.replace(/large/, 't500x500');
  }

}
