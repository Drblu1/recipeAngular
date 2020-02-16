import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const authRoutes: Routes = [
  {path: 'auth', component: AuthComponent},
];

@NgModule({
  declarations :[
    AuthComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule {

}
