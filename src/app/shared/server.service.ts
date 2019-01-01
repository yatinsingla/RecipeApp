import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { auth } from "firebase";

@Injectable()
export class ServerService {
    
    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}
    
    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://recipeapp-9c1b0.firebaseio.com/recipes.json?auth='+token, this.recipeService.getRecipe());
    }

    getRecipes() {
        const token = this.authService.getToken();
        return this.http.get('https://recipeapp-9c1b0.firebaseio.com/recipes.json?auth='+token);
    }

}