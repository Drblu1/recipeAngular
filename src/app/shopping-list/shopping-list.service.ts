import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {

  ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(ingredient);
  }
}
