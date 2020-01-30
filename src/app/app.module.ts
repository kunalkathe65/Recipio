import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { RecipesComponent } from './Recipes/recipes.component';
import { RecipeDetailComponent } from './Recipes/Recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './Recipes/Recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Recipes/Recipe-list/Recipe-item/recipe-item.component';
import { ShoppingListComponent } from './Shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Shopping-list/Shopping-edit/shopping-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
