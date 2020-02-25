import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
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
    private recipeService : RecipeService,
    private router : Router) { }

  onSubmit(){
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }

    this.onCancel(); 
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

  onAddIngredient(){
    (<FormArray> this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null,Validators.required),
        'amount' : new FormControl(null,
          [Validators.required,
           Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  onDeleteIngredient(index : number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route});
  }

  private initForm(){
    let recipeName = '';
    let imageURL = '';
    let description = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){  
      const recipe  : Recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      imageURL = recipe.imagePath;
      description = recipe.description;

      //if there are ingredients then loop thru them to pre-populate them in formArray
      if(recipe['ingredients']){
        for (let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name,Validators.required),
              'amount': new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName,Validators.required),
      'imagePath' : new FormControl(imageURL,Validators.required),
      'description' : new FormControl(description,Validators.required),
      'ingredients' : recipeIngredients
     
    })

  }
}
