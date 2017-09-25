import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/primeng';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicFooterComponent } from './music-footer/music-footer.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicService } from './shared/music.service';
import { ApiService } from './shared/api.service';

@NgModule({
  imports: [
    // Define imports
    FormsModule,
    AutoCompleteModule,
    HttpModule,
    CommonModule
  ],
  exports: [
    // Expose components
    MusicSearchComponent,
    MusicDetailsComponent,
    MusicPlayerComponent,
    MusicProgressComponent,
    MusicFooterComponent
  ],
  providers: [
    // Services
    ApiService,
    MusicService
  ],
  declarations: [MusicDetailsComponent, MusicFooterComponent, MusicProgressComponent, MusicSearchComponent, MusicPlayerComponent]
})
export class MusicModule { }
