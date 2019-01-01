import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { AuthGuard } from "../auth/auth-gaurd.service";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";

const recipesRoutes: Routes = [
    { path: 'recipes', component: RecipesComponent, children: [
        // static routes
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
        //dynamic routes
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
        { path: ':id', component: RecipeDetailComponent }
    ] },
]

@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)], // important forChild and not forRoot
    exports: [RouterModule]
})
export class RecipesRoutingModule {

}