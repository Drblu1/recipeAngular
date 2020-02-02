import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static:false}) form: NgForm;
  private subscription: Subscription;
  private editMode: boolean = false;
  private ingredientToEdit: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.ingredientEdited.subscribe(
      ingredient => {
        this.editMode = true;
        this.ingredientToEdit = ingredient;
        this.form.form.setValue({
          name: ingredient.name,
          amount: ingredient.amount,
        });
      }
    )
  }

  addOrUpdateIngredient(form: NgForm): void {
    const ingredient = new Ingredient(form.value.name, form.value.amount);
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.ingredientToEdit, ingredient)
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.form.resetForm();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
