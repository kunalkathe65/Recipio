import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector:"app-recipe-list",
    templateUrl:"recipe-list.component.html"
})
export class RecipeListComponent{
    recipes : Recipe[] = [
        new Recipe('Sphagetti','A classic italian dish :)','../assets/images/sphagetti.jpeg'),
    ];


}