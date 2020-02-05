import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
    selector:"app-recipe-list",
    templateUrl:"recipe-list.component.html",
    providers:[RecipeService]
})
export class RecipeListComponent implements OnInit{

    @Output() recipeWasSelected = new EventEmitter<Recipe> ();
    recipes : Recipe[] = [];
        
    constructor(private recipeService : RecipeService ){}

    ngOnInit(){

        this.recipes = this.recipeService.getRecipe();
    }


    onRecipeSelected(recipe : Recipe){
        this.recipeWasSelected.emit(recipe);
    }

}