import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'new-course-form-builder',
	templateUrl: './new-course-form-builder.component.html',
	styleUrls: [ './new-course-form-builder.component.css' ]
})
export class NewCourseFormBuilderComponent {
	form;
	constructor(fb: FormBuilder) {
		this.form = fb.group({
			name: [ '', Validators.required ],
			contact: fb.group({
				email: [],
				phone: []
			}),
			topics: fb.array([])
		});
	}

	get topics() {
		return this.form.get('topics') as FormArray;
	}

	addTopics(topic: HTMLInputElement) {
		this.topics.push(new FormControl(topic.value));
		topic.value = '';
	}

	removeTopic(topic: FormControl) {
		let index = this.topics.controls.indexOf(topic);
		this.topics.removeAt(index);
	}

	submit(form) {
		console.log(form);
	}
}
