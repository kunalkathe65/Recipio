import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';



@Component({
    selector:"app-shopping-edit",
    templateUrl:"shopping-edit.component.html"
})
export class ShoppingEditComponent implements OnInit,OnDestroy{

    @ViewChild('shoppingForm',{static:false}) slForm : NgForm;
    editMode :boolean = false;
    editingItemIndex : number = 0;
    editedItem : Ingredient;
    subscription : Subscription;

    // @ViewChild('nameInput',{static:false}) nameInputRef : ElementRef;
    // @ViewChild('amountInput',{static:false}) amountInputRef : ElementRef;

    constructor(private shoppingListService : ShoppingListService){}

    ngOnInit(){
        this.subscription = this.shoppingListService.editingStarted.subscribe(
            (index : number) => {
                this.editMode = true;
                this.editingItemIndex = index;
                this.editedItem = this.shoppingListService.getIngredient(index);
                this.slForm.setValue({       //populating the form controls
                    itemname : this.editedItem.name,
                    amount : this.editedItem.amount
                })

            }
        );
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

     onSubmit(form : NgForm){
        const value = form.value;
    //     const ingreName = this.nameInputRef.nativeElement.value;
    //     const ingreAmount = parseInt(this.amountInputRef.nativeElement.value);
        const newIngredient = new Ingredient(value.itemname,value.amount);
        if(this.editMode){
            this.shoppingListService.updateIngredients(this.editingItemIndex,newIngredient);
        }else{
            this.shoppingListService.addIngredients(newIngredient);    
        }
        this.editMode = false;  //setting 'editMode' to false everytime we've done editing it
        form.reset();
        

    }

    onClear(){
        this.slForm.reset();
        this.editMode = false;
    }

    onDelete(){
        this.shoppingListService.deleteIngredients(this.editingItemIndex);
        this.onClear();
    }

}