import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RecipeApp';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDJlcc-IX4k9SFwwXrnnVGry2_ugrZtJ44",
      authDomain: "recipeapp-9c1b0.firebaseapp.com"
    });
  }
}
