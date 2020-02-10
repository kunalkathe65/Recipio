import { Component, Input, Output , EventEmitter, OnInit} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
    selector:"app-recipe-item",
    templateUrl:"recipe-item.component.html"
})
export class RecipeItemComponent implements OnInit{

    @Input() recipe : Recipe;
    @Input() index : number;

    constructor(private recipeService : RecipeService){}

    ngOnInit(){}

    onItemSelected(){

        this.recipeService.recipeSelected.emit(this.recipe);
    }
    

    
}