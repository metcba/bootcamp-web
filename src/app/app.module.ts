import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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

import { MessageService } from './services/message.service';

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
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: false,
       scrollPositionRestoration: 'enabled' } // <-- debugging purposes only, set to true
    )
  ],
  providers: [MessageService],
})
export class AppModule { }
