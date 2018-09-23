import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './author.service';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormArrayComponent } from './new-course-form-array/new-course-form-array.component';
import { NewCourseFormBuilderComponent } from './new-course-form-builder/new-course-form-builder.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
	declarations: [
		AppComponent,
		CoursesComponent,
		CourseComponent,
		AuthorsComponent,
		SummaryPipe,
		FavouriteComponent,
		TitleCasePipe,
		PanelComponent,
		LikeComponent,
		InputFormatDirective,
		ZippyComponent,
		ContactFormComponent,
		NewCourseFormComponent,
		SignupFormComponent,
		NewCourseFormArrayComponent,
		NewCourseFormBuilderComponent,
		ChangePasswordComponent
	],
	imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
	providers: [ CoursesService, AuthorService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
