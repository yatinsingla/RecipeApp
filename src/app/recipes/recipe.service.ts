import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
    
    recipeItemSelected = new EventEmitter<Recipe>();
    
    recipes: Recipe[] = [
        new Recipe('Pao Bhaji', 'mumbai street origin dish', 'url://http://recipe.com/paobhaji'),
        new Recipe('Daal Makhni', 'punjab house origin dish', 'url://http://recipe.com/daalmakhni')
    ];

    getRecipe() {
        return this.recipes.slice();
    }
    
}