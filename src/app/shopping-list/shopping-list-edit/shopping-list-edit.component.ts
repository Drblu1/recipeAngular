import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameElement: ElementRef;
  @ViewChild('amountInput', {static: false}) amountElement: ElementRef;
  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  addNewIngredient(): void {
    if (this.nameElement.nativeElement.value !== ''  && this.amountElement.nativeElement.value !== '') {

      const ingredient = new Ingredient(this.nameElement.nativeElement.value, this.amountElement.nativeElement.value);
      this.ingredientAdded.emit(ingredient);
    }
  }
}
