import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Pao Bhaji', 'mumbai street origin dish', 'url://http://recipe.com/paobhaji'),
    new Recipe('Daal Makhni', 'punjab house origin dish', 'url://http://recipe.com/daalmakhni')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeItemSelectedEvent(recipe: Recipe) {
    //console.log(recipe);
    this.recipeSelected.emit(recipe);
  }

}
