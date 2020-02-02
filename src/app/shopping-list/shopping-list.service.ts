import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {

  ingredientChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
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
    this.ingredients[ingredientIndex] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredient(ingredientToAdd: Ingredient) {
    const ingredientIndex = this.ingredients.findIndex(ingredient => {
      return ingredient.name === ingredientToAdd.name;
    });
    if (ingredientIndex === -1) {
      this.ingredients.push(ingredientToAdd);
      this.ingredientChanged.next(this.ingredients.slice());
    } else {
      console.log("Ingredient already in")
      //Inform the user
    }
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice())
  }


  onIngredientSelected(index: number) {
    this.ingredientEdited.next(this.ingredients[index]);
  }

  deleteIngredient(ingredientToDelete: Ingredient) {
    const ingredientIndex = this.ingredients.findIndex(ingredient => {
      return ingredient.name === ingredientToDelete.name && ingredient.amount === ingredientToDelete.amount;
    });
    if ( ingredientIndex !== -1) {
      this.ingredients.splice(ingredientIndex, 1);
      this.ingredientChanged.next(this.ingredients.slice());
    }
  }
}
