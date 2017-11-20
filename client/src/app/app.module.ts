import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule} from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './poll/dashboard/dashboard.component';
import { PollComponent } from './poll/poll.component';
import { SurveyComponent } from './poll/survey/survey.component';
import { CreateComponent } from './poll/create/create.component';
import { HomeComponent } from './home/home.component';

import {UserService } from './user.service'
import {PollService} from './poll.service'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PollComponent,
    SurveyComponent,
    CreateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService, PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
