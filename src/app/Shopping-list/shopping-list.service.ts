import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

    ingredients : Ingredient[] =[
        new Ingredient('Tomato',10),
        new Ingredient('Apples',5),
        new Ingredient('Mangoes',50)
    ];

    ingredientsChanged = new EventEmitter<Ingredient[]> ();  //this event listens to any change in ingredients array

    getIngredients(){
         return this.ingredients.slice();
    }

    addIngredients(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice()); // will emit the new or changed array copy
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]){       
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());        
    }
}