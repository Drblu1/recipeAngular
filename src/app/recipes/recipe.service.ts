import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe',
      'this is a recipe',
      'https://natashaskitchen.com/wp-content/uploads/2019/08/ground-beef-recipes-roundup-vertical-photo.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Burger',
      'A burger recipe',
      'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F03ab5e89-bad7-4a44-b952-b30c68934215.2Ejpeg/748x372/quality/90/crop-from/center/burger-maison.jpeg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('meat', 1),
        new Ingredient('French Fries', 20)
      ])
  ];


  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
