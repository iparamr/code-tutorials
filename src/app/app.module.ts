import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { CountryListComponent } from './country-list/country-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseDetailsComponent,
    MdToHtmlPipe,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
