import { Component, OnInit, EmbeddedViewRef, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';



@Component({
    selector:"app-recipe-list",
    templateUrl:"recipe-list.component.html",
})
export class RecipeListComponent implements OnInit, OnDestroy{
  
    recipes : Recipe[] = [];
    subscription : Subscription;
        
    constructor(private recipeService : RecipeService ){}

    ngOnInit(){

        this.subscription = this.recipeService.recipeChanged.subscribe(
            (recipe : Recipe[]) => {
                this.recipes = recipe;
            }
        )

        this.recipes = this.recipeService.getRecipe();
        
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}