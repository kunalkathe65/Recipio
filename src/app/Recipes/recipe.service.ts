import { EventEmitter } from '@angular/core';
import { Recipe } from '../Recipes/recipe.model'
import { Ingredient } from '../shared/ingredient.model';

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

    getRecipe(){
        return this.recipes.slice();  // return a copy of recipes array so that we should'nt modify original one
    }

}