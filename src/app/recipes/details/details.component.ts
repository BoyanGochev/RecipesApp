import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  recipe;
  isCreator: boolean;

  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadRecipe();
  }

  loadRecipe() {
    const id = this.activatedRoute.snapshot.params.id;
    this.recipesService.getRecipe(id).subscribe(
      res => {
        this.recipe = res;
        this.isCreator = sessionStorage.getItem('userId') === res._acl.creator;
        console.log(this.recipe);
      }
    );
  }

  navigateEdit(){
    this.router.navigate([`/edit/${this.recipe._id}`]);
  }

}
