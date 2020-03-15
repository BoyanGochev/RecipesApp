import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  recipe: any;
  id: string;

  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadRecipe();
  }

  loadRecipe() {
    this.id = this.activatedRoute.snapshot.params.id;

    this.recipesService.getRecipe(this.id).subscribe(
      res => {
        this.recipe = res;
      }
    );
  }

  editHandler(data) {
    this.recipesService.editRecipe(data, this.id).subscribe(
      res => {
        this.router.navigate(['/']);
      }
    );
  }

}
