import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './Recipes/recipes.component';
import { RecipeDetailComponent } from './Recipes/Recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './Shopping-list/shopping-list.component';
import { RecipeEditComponent } from './Recipes/recipe-edit/recipe-edit.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  { path :'', redirectTo:'/welcome',pathMatch:'full'},
  { path : 'welcome', component : WelcomeComponent},
  { path : 'about', component : AboutComponent},
  { path : 'recipes', component : RecipesComponent, 
    children : [
      { path : 'new', component :  RecipeEditComponent },
      {path: ':id',component : RecipeDetailComponent},
      {path: ':id/edit',component : RecipeEditComponent}]
  },
  { path : 'shopping-list', component : ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
