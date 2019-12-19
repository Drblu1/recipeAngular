import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  private recipeDetailsToDisplay: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

  updateRecipeDetails(recipe: Recipe) {
    this.recipeDetailsToDisplay = recipe;
  }
}
