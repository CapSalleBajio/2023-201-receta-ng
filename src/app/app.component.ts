import { Component } from '@angular/core';
import { IRecipe } from './interfaces/recipe.interface';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngReceta';
  recipes: IRecipe[] = [];

  constructor(private recipeService: RecipeService) {
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }

}
