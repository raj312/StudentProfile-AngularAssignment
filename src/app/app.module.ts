import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CourseInformationService } from './course-information.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { ShowCourseInfoComponent } from './show-course-info/show-course-info.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowProfileComponent,
    ShowCourseInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ HttpClient, CourseInformationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
