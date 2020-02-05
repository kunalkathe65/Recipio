import { Recipe } from '../Recipes/recipe.model'

export class RecipeService{

    recipes : Recipe[] = [
        new Recipe('Sphagetti','A classic italian dish :)','../assets/images/sphagetti.jpeg'),
        new Recipe('Hakka Noodles','A classic chinese dish :)','../assets/images/hakka.jpeg'),
    ];

    getRecipe(){
                                       //as array returns reference
        return this.recipes.splice(0);  // return a copy of recipes array so that we should'nt modify original one
    }

}