import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppModule as AppFeb2019 } from '../app-feb2019/app.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MentorsComponent } from './mentors/mentors.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { OngComponent } from './ong/ong.component';
import { PlanningComponent } from './planning/planning.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'febrero-2019',  redirectTo: '/feb2019' },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MentorsComponent,
    SponsorsComponent,
    OngComponent,
    PlanningComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
