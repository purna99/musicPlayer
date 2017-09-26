import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MusicModule } from './music/music.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MusicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
