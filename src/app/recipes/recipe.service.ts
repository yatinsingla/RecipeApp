import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    
    recipes: Recipe[] = [
        new Recipe(
            'Pao Bhaji', 
            'mumbai street origin dish', 
            'url://http://recipe.com/paobhaji',
            [
                new Ingredient("pao", 2),
                new Ingredient("onion", 2)
            ]),
        new Recipe(
            'Daal Makhni', 
            'punjab house origin dish', 
            'url://http://recipe.com/daalmakhni',
            [
                new Ingredient("butter", 2),
                new Ingredient("tomato", 2)
            ])
    ];

    // as we are returning recipe.slice in getRecipe which is copy we need to update that
    recipeChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService){};

    getRecipe() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipeByID(id: number) {
        // could also use .slice that would return copy of recipe
        return this.recipes[id]; // id as index
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(id: number, newRecipe: Recipe) {
        this.recipes[id] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(id: number) {
        this.recipes.splice(id, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
    
}