import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeApp';

  @Input() newString: string;
  
  onFlagSelected(flag: string) {
    this.newString = flag;
  }
}
