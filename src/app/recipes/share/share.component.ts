import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor(
    private recipesService: RecipesService,
    private router: Router,
  ) { }

  shareRecipe(data) {
    this.recipesService.createRecipe(data).subscribe(
      res => {
        this.router.navigate(['/']);
      }
    );

  }

  ngOnInit() {
  }

}
