import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {

  ingredientAdded: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  ingredientEdited: Subject<Ingredient> = new Subject<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }


  updateIngredient(previousIngredient: Ingredient, newIngredient: Ingredient) {
    const ingredientIndex = this.ingredients.findIndex(ingredient => {
      return ingredient.name === previousIngredient.name && ingredient.amount === previousIngredient.amount;
    });
    //Bug to correct here if 2 ingredients are the same the first one in the array will be edited
    this.ingredients[ingredientIndex] = newIngredient;
    this.ingredientAdded.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients.slice())
  }


  onIngredientSelected(index: number) {
    this.ingredientEdited.next(this.ingredients[index]);
  }
}
