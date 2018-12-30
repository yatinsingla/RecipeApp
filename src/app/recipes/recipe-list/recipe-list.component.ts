import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServerService } from '../../shared/server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  subscription: Subscription;
  recipes: Recipe[];

  constructor(private serverService: ServerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.serverService.getRecipes()
        .subscribe(
          (response: Response) => {
            this.recipes = response.json();
          }
        )
  }

  newRecipe() {
    this.router.navigate(['new'], {relativeTo:this.route})
  }

}
