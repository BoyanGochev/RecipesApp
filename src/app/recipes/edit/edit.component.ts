import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadRecipe();
  }

  loadRecipe() {
    const id = this.activatedRoute.snapshot.params.id;

    this.recipesService.getRecipe(id).subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
