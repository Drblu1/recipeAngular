import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {RecipeStart} from "./no-recipe-selected/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {RecipesResolverService} from "./recipesResolver.service";
import {AuthGuard} from "../auth/auth.guard";

const recipeRoutes: Routes = [
  {path: '', component: RecipesComponent, children: [
      {path: '', component: RecipeStart},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailsComponent, resolve: [RecipesResolverService]},
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
    ], canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
