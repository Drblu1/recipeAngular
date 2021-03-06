import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ErrorPageComponent} from "./error-page/error-page.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes' , pathMatch: "full"},
  {path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(module => module.RecipesModule )},
  {path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(module => module.ShoppingListModule)},
  {path: 'auth', loadChildren: () => import('./auth/Auth.module').then(module => module.AuthModule)},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
