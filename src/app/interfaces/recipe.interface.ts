export interface IRecipe {
  title: string;
  category: string;
  minutes: number;
  ingredients: string[];
  prompt: string;
  instructions: string[];
  stars: number;
  imageUrl: string;
}
