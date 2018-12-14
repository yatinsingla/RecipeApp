import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    
    recipeItemSelected = new EventEmitter<Recipe>();
    
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
    
}