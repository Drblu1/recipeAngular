import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {NgModule} from "@angular/core";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {AuthComponent} from "./auth/auth.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes' , pathMatch: "full"},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'auth', component: AuthComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
