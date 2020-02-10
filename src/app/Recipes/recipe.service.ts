import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../Recipes/recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../Shopping-list/shopping-list.service';

export class RecipeService{


    recipeSelected = new EventEmitter<Recipe> ();
    recipes : Recipe[] = [
        new Recipe(
            'Sphagetti',
            'A classic italian dish :)',
            '../assets/images/sphagetti.jpeg',
            [
                new Ingredient('Sphagetti',5),
                new Ingredient('Soya Sauce',1)
                
            ]),

        new Recipe(
            'Hakka Noodles',
            'A classic chinese dish :)',
            '../assets/images/hakka.jpeg',
            [
                new Ingredient('Noodles',5),
                new Ingredient('Soya Sauce',1)
            ]),
    ];

    getRecipeById(index:number){
        return this.recipes[index];  
    }

    getRecipe(){
        return this.recipes.slice();  // return a copy of recipes array so that we should'nt modify original one
    }


    
}