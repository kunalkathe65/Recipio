import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id : number;
  editMode : boolean = false;
  recipeForm : FormGroup;

  constructor(private route : ActivatedRoute,
    private recipeService : RecipeService) { }

  onSubmit(){
    console.log(this.recipeForm);
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) => {
        this.id = +params['id'];
        if(params['id'] != null) this.editMode = true; //checking if 'id' is not null then edit the recipe else new one
        this.initForm();
      }
    )
  }

  private initForm(){
    let recipeName = '';
    let imageURL = '';
    let description = '';

    if(this.editMode){  
      const recipe  : Recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      imageURL = recipe.imagePath;
      description = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName),
      'imagePath' : new FormControl(imageURL),
      'description' : new FormControl(description)
    })

  }
}
