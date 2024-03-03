import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { HeroService } from '../../services/hero.service';
import { Recipe } from '../../shared/models/recipe';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit{
  allRecipes: Recipe[] = [];
  constructor(private heroService:HeroService) {}

  ngOnInit(): void {
    this.heroService.fetchData().subscribe((data) => {
      this.allRecipes = data;
      console.log(data)
    })
  }
}
