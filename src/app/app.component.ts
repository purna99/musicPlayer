import { Component } from '@angular/core';
import { MusicService } from './music/shared/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title;
  filteredTracks: any[] = [];
  backgroundStyle;

  constructor(
    private musicService: MusicService
  ) { }

  handleQuery(payload) {
    this.musicService.findTracks(payload).subscribe(tracks => {
      this.filteredTracks = tracks;
    });
  }

  handleUpdate(track) {
    this.musicService.play(track.stream_url);
    this.title = track.title;
    this.backgroundStyle = this.composeBackgroundStyle(track.artwork_url)
  }

  composeBackgroundStyle(url) {
    return {
      width: '100%',
      height: '1000px',
      backgroundSize: 'cover',
      backgroundImage: `linear-gradient(
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.7)
  ),   url(${this.musicService.xlArtwork(url)})`
    }
  }

}
