import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe',
      'this is a recipe',
      'https://natashaskitchen.com/wp-content/uploads/2019/08/ground-beef-recipes-roundup-vertical-photo.jpg'),
    new Recipe('Another',
      'this is another recipe',
      'https://natashaskitchen.com/wp-content/uploads/2019/08/ground-beef-recipes-roundup-vertical-photo.jpg')
  ];


  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
