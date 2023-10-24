import { Component, Input } from "@angular/core";


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  @Input() isLoading: boolean = false;

  constructor() {}

  generateRecipe() {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
  }

}
