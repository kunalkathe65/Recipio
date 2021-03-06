import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DropDownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './Shopping-list/shopping-list.service';
import { RecipeEditComponent } from './Recipes/recipe-edit/recipe-edit.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { RecipeService } from './Recipes/recipe.service';
import { DataStorageService } from './shared/datastorage.service';  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
    RecipeEditComponent,
    WelcomeComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbModule
  ],
  providers: [ShoppingListService,RecipeService,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
