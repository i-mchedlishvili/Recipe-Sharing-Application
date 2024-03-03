import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [
    MainPageComponent,
    RecipeDetailsComponent,
    RecipeFormComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
