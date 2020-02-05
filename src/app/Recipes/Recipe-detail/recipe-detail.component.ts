import { Component , Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/Shopping-list/shopping-list.service';


@Component({
    selector:"app-recipe-detail",
    templateUrl:"recipe-detail.component.html"
})
export class RecipeDetailComponent{
    @Input() recipe:Recipe;

    constructor(private shoppingListService : ShoppingListService){}

    addToShoppingList(){
        this.shoppingListService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

}