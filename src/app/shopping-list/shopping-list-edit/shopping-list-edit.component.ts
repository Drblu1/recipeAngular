import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  addNewIngredient(form: NgForm): void {
    if (form.value.name !== ''  && form.value.amout !== '') {

      const ingredient = new Ingredient(form.value.name, form.value.amount);
      this.shoppingListService.addIngredient(ingredient);
    }
  }
}
