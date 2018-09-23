import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'favourite',
	templateUrl: './favourite.component.html',
	styleUrls: [ './favourite.component.scss' ],
	encapsulation: ViewEncapsulation.Emulated
})
export class FavouriteComponent implements OnInit {
	@Input('is-favourite') isFavourite: boolean;
	@Output('change') click = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	onClick() {
		this.isFavourite = !this.isFavourite;
		this.click.emit({ newValue: this.isFavourite });
	}
}

export interface FavouriteChangedEventArgs {
	newValue: boolean;
}
