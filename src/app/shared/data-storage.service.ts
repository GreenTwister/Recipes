import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({ providedIn: 'root'})

export class DataStorageService {
    constructor( private http: HttpClient, private recipeService: RecipeService){}

    storeRecipe() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-course-recipe-book-bcdfb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes).subscribe(response => {
            console.log(response);
        })
    }

    fetchRecipe(){
        this.http.get<Recipe[]>('https://ng-course-recipe-book-bcdfb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json').subscribe(recipes => {
            this.recipeService.setRecipes(recipes)
        })
    }

}