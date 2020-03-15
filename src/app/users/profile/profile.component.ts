import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  myRecipes = [];
  constructor(
    private recipesService: RecipesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    const id = sessionStorage.getItem('userId');
    this.recipesService.getRecipes().subscribe(
      (res: Array<any>) => {
        this.myRecipes = res.filter((rec) => rec._acl.creator === id);
      }
    );
  }


}
