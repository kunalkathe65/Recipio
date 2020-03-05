import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {RecipeService} from '../Recipes/recipe.service';
import { Recipe } from '../Recipes/recipe.model';

 @Injectable()

 export class DataStorageService{
     constructor(private recipeService: RecipeService,private http : HttpClient){}

     storeRecipes(){
         //this returns an observable
         //it is mandatory to write "data.json" at the end while using firebase
         //'POST' request in firebase appends the data to node, so using 'PUT' request to actually post data so as to overwrite in firebase
         return this.http.put('https://ng-recipe-book-dd0da.firebaseio.com/data.json',this.recipeService.getRecipe());
     }

     getRecipes(){
         this.http.get('https://ng-recipe-book-dd0da.firebaseio.com/data.json')
         .subscribe(
         //beacuse we know we'll get response as array of Recipe(model)
             (recipes : Recipe[]) => {
                this.recipeService.setRecipes(recipes);
             }
         );
     }
 }