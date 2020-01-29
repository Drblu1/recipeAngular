import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

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


  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeByIndex(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}
