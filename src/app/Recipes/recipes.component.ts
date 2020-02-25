import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../Recipes/recipe.service';


@Component({
    selector:"app-recipes",
    templateUrl:"recipes.component.html"
})

export class RecipesComponent implements OnInit{

    selectedRecipe :Recipe;

    constructor(private recipeService : RecipeService){}

    ngOnInit(){

        this.recipeService.recipeSelected.subscribe(
            (recipe:Recipe) => {
                this.selectedRecipe = recipe;
            }
        )

    }
}