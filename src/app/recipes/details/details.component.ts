import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  recipe: any;
  isCreator: boolean;
  id: string;

  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadRecipe();
  }

  loadRecipe() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.recipesService.getRecipe(this.id).subscribe(
      (res: any) => {
        this.recipe = res;
        this.isCreator = sessionStorage.getItem('userId') === res._acl.creator;
      }
    );
  }

  deleteHandler() {
    this.recipesService.deleteRecipe(this.id).subscribe(
      res => {
        this.router.navigate(['/']);
      }
    );
  }

  navigateEdit() {
    this.router.navigate([`/edit/${this.recipe._id}`]);
  }

}
