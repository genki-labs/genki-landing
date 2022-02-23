import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeroComponent } from './Components/hero/hero.component';
import { UsersFeatureComponent } from './Components/users-feature/users-feature.component';
import { ProjectFeatureComponent } from './Components/project-feature/project-feature.component';
import { ChannelFeatureComponent } from './Components/channel-feature/channel-feature.component';
import { AboutGenkiComponent } from './Components/about-genki/about-genki.component';
import { TeamComponent } from './Components/team/team.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GenkiFriendsComponent } from './Components/genki-friends/genki-friends.component';
import { DataPipelineService } from './Service/data-pipeline.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    UsersFeatureComponent,
    ProjectFeatureComponent,
    ChannelFeatureComponent,
    AboutGenkiComponent,
    TeamComponent,
    FooterComponent,
    GenkiFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataPipelineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
