import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [
     new Recipe ( 'A Test Recipe','This is simply a test','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/salad_hand_opt.jpg'),
     new Recipe ( 'A Test Recipe','This is simply a test','https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/11/mexican-penne.jpg'),
     new Recipe ( 'A Test Recipe','This is simply a test','https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/09/mealprep-pasta-merged_web3_copy.jpg'),
     new Recipe ( 'A Test Recipe','This is simply a test','https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/eggrocketpizzas_5729.jpg')
 ];
  constructor() { }

  ngOnInit() {
  }

}
