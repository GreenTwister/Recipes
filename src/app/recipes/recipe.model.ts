import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients:Ingredient[]

    constructor(name: string, descr: string, imagepath: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = descr;
        this.imagePath = imagepath;
        this.ingredients = ingredients;
    }
}