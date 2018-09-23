import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	post = {
		title: 'Title',
		isFavourite: true
	};

	tweet = {
		body: '...',
		likesCount: 10,
		isLiked: true
	};

	courses = [];
	canSave = true;

	viewMode = 'something else';
	task = {
		title: 'Review applications',
		assignee: {
			name: 'John Smith'
		}
	};

	onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {
		console.log('changed ', eventArgs);
	}

	loadCourses() {
		this.courses = [ { id: 1, name: 'Angular' }, { id: 2, name: 'React' }, { id: 3, name: 'Redux' } ];
	}

	onAdd() {
		this.courses.push({
			id: 4,
			name: 'Node.js'
		});
	}

	onRemove(course) {
		let index = this.courses.indexOf(course);
		this.courses.splice(index, 1);
	}

	trackCourse(index, course) {
		return course ? course.id : undefined;
	}
}
