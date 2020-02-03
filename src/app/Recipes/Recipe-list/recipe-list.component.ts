import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
    selector:"app-recipe-list",
    templateUrl:"recipe-list.component.html"
})
export class RecipeListComponent{

    @Output() recipeWasSelected = new EventEmitter<Recipe> ();
    recipes : Recipe[] = [
        new Recipe('Sphagetti','A classic italian dish :)','../assets/images/sphagetti.jpeg'),
        new Recipe('Hakka Noodles','A classic chinese dish :)','../assets/images/hakka.jpeg'),
    ];


    onRecipeSelected(recipe : Recipe){
        this.recipeWasSelected.emit(recipe);
    }

}