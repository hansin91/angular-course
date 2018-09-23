import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
	selector: 'courses',
	template: '<h3>{{title | summary:10 }}</h3>'
	// template: `<button id="btn-save" (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive">Save</button>`
})
export class CoursesComponent {
	title = 'List of courseskalshdkjashdkjashdkhaskdhaksdhkjasdhjkashdkjashdkjashdkahsdjkashdkjashdkjashdkjashdkjashdkjasdh';
	courses;
	isActive;

	constructor(service: CoursesService) {
		this.courses = service.getCourses();
		this.isActive = true;
	}

	onSave($event) {
		console.log($event.target.id);
	}
}
