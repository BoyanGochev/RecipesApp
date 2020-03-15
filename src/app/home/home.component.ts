import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;
  recipes: any;

  constructor(
    private recipesService: RecipesService,
    private router: Router
  ) { }

  loadRecipes() {
    this.recipesService.getRecipes().subscribe(
      res => {
        this.recipes = res;
      }
    );
  }

  ngOnInit() {
    this.isLoggedIn = sessionStorage.getItem('authtoken') !== null;
    this.loadRecipes();
  }

}
