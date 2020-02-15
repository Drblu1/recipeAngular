import {Component, OnDestroy} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: [
    'auth.component.css'
  ]
})
export class AuthComponent implements OnDestroy {
  private isLoginMode = true;
  private isLoading = false;
  private error: string = null;
  private subscription: Subscription;

  constructor(private authService: AuthService) {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    const email = authForm.value.email;
    const password = authForm.value.password;
    this.isLoading = true;
    if (this.isLoginMode) {

    } else {
      this.subscription = this.authService.signUp(email, password)
        .subscribe(
          response => {
            console.log(response);
            this.isLoading = false;
          },
          errorMessage => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
          });
    }
    authForm.reset();
  }

  ngOnDestroy(): void {
  }
}
