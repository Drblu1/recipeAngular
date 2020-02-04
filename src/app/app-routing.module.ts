import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {NgModule} from "@angular/core";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {RecipeDetailsComponent} from "./recipes/recipe-details/recipe-details.component";
import {RecipeStart} from "./recipes/no-recipe-selected/recipe-start.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {RecipesResolverService} from "./recipes/recipesResolver.service";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes' , pathMatch: "full"},
  {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStart},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailsComponent, resolve: [RecipesResolverService]},
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
