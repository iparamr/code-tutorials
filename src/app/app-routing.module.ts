import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full'},
  { path: 'courses', component: CourseListComponent },
  { path: 'course/:id', component: CourseDetailsComponent },
  { path: 'countries', component: CountryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
