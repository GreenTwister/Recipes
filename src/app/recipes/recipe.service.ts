import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
      new Recipe(
        "Une recette test", 
        "Ceci est simplement qu'un test", 
        "https://cdn.pixabay.com/photo/2018/05/03/05/19/skewer-3370443_1280.jpg",
        [
          new Ingredient('Viande',1),
          new Ingredient('Oignon',1),
          new Ingredient('Poivron',1),
          new Ingredient('Roquette',1)
        ]),
      new Recipe("Une recette test 2",
        "Ceci est simplement qu'un test encore",
        "https://cdn.pixabay.com/photo/2018/05/03/05/19/skewer-3370443_1280.jpg",
        [
          new Ingredient('Viande',1),
          new Ingredient('Oignon',1),
          new Ingredient('Poivron',1),
          new Ingredient('Roquette',1)
        ])
  ];

  constructor(private slService: ShoppingListService  ){

  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }
    
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.slice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}