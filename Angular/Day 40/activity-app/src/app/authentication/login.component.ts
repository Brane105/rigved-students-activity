import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	invalidCredentialMsg = '';
	constructor(private authService: AuthService, private router: Router) {
	}
	loginForm = new FormGroup({
		username: new FormControl(),
		password: new FormControl()
	});
	onFormSubmit() {
		let uname = this.loginForm.get('username')?.value;
		let pwd = this.loginForm.get('password')?.value;
		this.authService.isUserAuthenticated(uname, pwd).subscribe(
			authenticated => {
				if (authenticated) {
					let url = this.authService.getRedirectUrl();
					console.log('Redirect Url:' + url);
					this.router.navigate([url]);
				} else {
					this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
				}
			}
		);
	}
}
