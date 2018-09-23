import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
	static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if ((control.value as string) === 'mosh') resolve({ shouldBeUnique: true });
				else resolve(null);
			}, 2000);
		});
	}

	static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
		if ((control.value as string).indexOf(' ') >= 0) return { cannotContainSpace: true };

		return null;
	}
}
