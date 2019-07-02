import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MentorsComponent } from './mentors/mentors.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { OngComponent } from './ong/ong.component';
import { PlanningComponent } from './planning/planning.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HomeComponent, MentorsComponent, SponsorsComponent, OngComponent, PlanningComponent, NavbarComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
