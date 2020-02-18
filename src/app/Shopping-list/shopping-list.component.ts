import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';


@Component({
    selector:"app-shopping-list",
    templateUrl:"shopping-list.component.html"
})
export class ShoppingListComponent implements OnInit, OnDestroy{

    private subscription : Subscription;
    
    ingredients : Ingredient[] =[];
    constructor(private shoppingListService : ShoppingListService) {}

    ngOnInit(){
        this.ingredients = this.shoppingListService.getIngredients();
        this.subscription = this.shoppingListService.ingredientsChanged.subscribe( 
            (ingredients : Ingredient[]) => {
                this.ingredients = ingredients; // assigning a new (updated) array to old array
            }
        )
    }
    onEditItem(index : number){
        this.shoppingListService.editingStarted.next(index);
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}