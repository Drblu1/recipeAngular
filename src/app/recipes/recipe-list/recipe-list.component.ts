import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() private recipeItemClick: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe',
      'this is a recipe',
      'https://natashaskitchen.com/wp-content/uploads/2019/08/ground-beef-recipes-roundup-vertical-photo.jpg'),
    new Recipe('Another',
      'this is another recipe',
      'https://natashaskitchen.com/wp-content/uploads/2019/08/ground-beef-recipes-roundup-vertical-photo.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeItemClick(recipe: Recipe) {
    this.recipeItemClick.emit(recipe);
  }
}
