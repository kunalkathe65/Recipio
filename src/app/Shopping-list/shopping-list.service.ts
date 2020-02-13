import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]> ();

    ingredients : Ingredient[] =[
        new Ingredient('Tomato',10),
        new Ingredient('Apples',5),
        new Ingredient('Mangoes',50)
    ]; 
    getIngredients(){
         return this.ingredients.slice();
    }

    addIngredients(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice()); // will emit the new or changed array copy
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]){       
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());        
    }
}