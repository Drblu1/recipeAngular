import {Component, ComponentFactoryResolver, OnDestroy, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthResponseData, AuthService} from "./auth.service";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AlertComponent} from "../shared/alert/alert.component";
import {PlaceholderDirective} from "../shared/placeholder/placeholder.directive";

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
  private subscriptions: Subscription[] = [];
  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;

  constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    const email = authForm.value.email;
    const password = authForm.value.password;
    let authObs: Observable<AuthResponseData>

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }
    this.subscriptions.push(this.createAuthenticationSubscription(authObs));
    authForm.reset();
  }

  private createAuthenticationSubscription(authObs: Observable<AuthResponseData>) {
    return authObs.subscribe(
      response => {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      });
  }

  onHandleError() {
    this.error = null;
  }


  private closeSubscription: Subscription;

  private showErrorAlert(errorMessage: string) {
    const alertComponentComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const alertComponentComponentRef = hostViewContainerRef.createComponent(alertComponentComponentFactory);
    alertComponentComponentRef.instance.message = errorMessage;
    this.closeSubscription = alertComponentComponentRef.instance.close.subscribe(() => {
      this.closeSubscription.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    if (this.closeSubscription) {
      this.closeSubscription.unsubscribe();
    }
  }
}
