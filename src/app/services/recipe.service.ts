import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RecipeService {

 url = 'http://localhost:3010';

 async getRecipes() {
  return fetch(`${this.url}/recipes`).then(res => res.json());
 }

}
