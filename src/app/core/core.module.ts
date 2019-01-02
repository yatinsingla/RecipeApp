import { NgModule } from "@angular/core";

// compenents
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
// modules
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from '../app-routing.module';
// services used
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { ServerService } from '../shared/server.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-gaurd.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule, // for dropdown.directive
        AppRoutingModule // header is using routing 
    ],
    exports: [
        AppRoutingModule, // main module also need routes which also has router-outlet
        HeaderComponent   // bcoz we have app-header selector in app.component.ts 
    ], 
    providers: [ShoppingListService, RecipeService, ServerService, AuthService, AuthGuard]
})
export class CoreModule {

}