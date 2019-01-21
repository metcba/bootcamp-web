import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ParticipantsComponent } from './participants/participants.component';
import { MentorsComponent } from './mentors/mentors.component';
import { ProgramComponent } from './program/program.component';
import { FooterComponent } from './footer/footer.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ParticipantsComponent,
    MentorsComponent,
    ProgramComponent,
    FooterComponent,
    SponsorsComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: false } // <-- debugging purposes only, set to true
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
