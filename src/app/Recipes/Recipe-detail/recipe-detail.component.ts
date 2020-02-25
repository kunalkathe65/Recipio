import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { ShoppingListService } from "src/app/Shopping-list/shopping-list.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "recipe-detail.component.html"
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
    });
  }

  addToShoppingList() {
    this.shoppingListService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});  // here we don't need 'id' because we're already on /'id' route
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'],{relativeTo:this.route});
  }
}
