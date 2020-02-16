import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ErrorPageComponent} from "./error-page/error-page.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes' , pathMatch: "full"},
  {path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(module => module.RecipesModule )},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
