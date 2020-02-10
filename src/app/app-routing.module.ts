import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './Recipes/recipes.component';
import { RecipeDetailComponent } from './Recipes/Recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './Shopping-list/shopping-list.component';


const appRoutes: Routes = [
  { path :'', redirectTo:'/recipes',pathMatch:'full'},
  { path : 'recipes', component : RecipesComponent, 
    children : [{ path : ':id', component :  RecipeDetailComponent }]
  },
  { path : 'shopping-list', component : ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
