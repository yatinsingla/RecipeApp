import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    ingredientChanged = new Subject<Ingredient[]>();
    editingStarted = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('dhaniya', 2),
        new Ingredient('onion', 1)
    ];

    getIngredients() {
        // slice method in order to return copy of ingredients 
        return this.ingredients.slice();
    }

    getIngredient(id: number) {
        return this.ingredients[id];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // 1st way (problem: too many events for too many ingredients)
        // for(let ingredient of ingredients) {
        //     this.addIngredients(ingredient);
        // }

        // 2nd way (solution: add all ingredients once and then emit 1 event)
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    updateIngredient(id: number, ingredient: Ingredient) {
        this.ingredients[id] = ingredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(id: number) {
        this.ingredients.splice(id, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}