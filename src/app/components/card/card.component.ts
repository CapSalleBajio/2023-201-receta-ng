import { Component, Input } from "@angular/core";
import { IRecipe } from "src/app/interfaces/recipe.interface";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
})
export class CardComponent {

  @Input() recipe!: IRecipe;

}
