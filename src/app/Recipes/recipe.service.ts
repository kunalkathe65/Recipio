import { EventEmitter } from '@angular/core';
import { Recipe } from '../Recipes/recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    recipeChanged = new Subject<Recipe[]>();

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

    setRecipes(recipes : Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());

    }

    updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    addRecipe(recipe : Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }


    
}