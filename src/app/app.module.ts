import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// app components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// services used
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { ServerService } from './shared/server.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-gaurd.service';
// other modules
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
// routing module
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    AppRoutingModule, 
    SharedModule
  ],
  providers: [ShoppingListService, RecipeService, ServerService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
