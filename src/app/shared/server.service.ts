import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class ServerService {
    
    constructor(private http: Http, private recipeService: RecipeService) {}
    
    storeRecipes() {
        return this.http.put('https://recipeapp-9c1b0.firebaseio.com/recipes.json', this.recipeService.getRecipe());
    }

    getRecipes() {
        return this.http.get('https://recipeapp-9c1b0.firebaseio.com/recipes.json');
    }

}