import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() flagSelected = new EventEmitter<string>();

    onRecipeClick() {
        this.flagSelected.emit('recipe');
    }

    onShoppingClick() {
        this.flagSelected.emit('shopping-list');
    }
}