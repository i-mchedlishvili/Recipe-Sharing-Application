import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../shared/models/recipe';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private httpClient: HttpClient) { }

  fetchData() {
    return this.httpClient.get<Recipe[]>('http://localhost:3000/recipes')
  }


}
