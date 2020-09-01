import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GracewaService } from './gracewa.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,
  RouterModule.forRoot([
      { path: '', component: HomeComponent },
      
    ]) ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GracewaService, ProfileService]
  })
export class AppModule { }
