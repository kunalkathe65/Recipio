import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
    selector:"app-shopping-edit",
    templateUrl:"shopping-edit.component.html"
})
export class ShoppingEditComponent{

    @ViewChild('nameInput',{static:false}) nameInputRef : ElementRef;
    @ViewChild('amountInput',{static:false}) amountInputRef : ElementRef;

    constructor(private shoppingListService : ShoppingListService){}

    onAddItem(){
        const ingreName = this.nameInputRef.nativeElement.value;
        const ingreAmount = parseInt(this.amountInputRef.nativeElement.value);
        const newIngredient = new Ingredient(ingreName,ingreAmount);
        this.shoppingListService.addIngredients(newIngredient);

    }
    
}