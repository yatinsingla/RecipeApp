import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('dhaniya', 2),
        new Ingredient('onion', 1)
    ];

    getIngredients() {
        // slice method in order to return copy of ingredients 
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // 1st way (problem: too many events for too many ingredients)
        // for(let ingredient of ingredients) {
        //     this.addIngredients(ingredient);
        // }

        // 2nd way (solution: add all ingredients once and then emit 1 event)
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}