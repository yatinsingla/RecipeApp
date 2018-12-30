import { Component } from "@angular/core";
import { Response } from '@angular/http';

import { ServerService } from '../shared/server.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    
    constructor(private serverService: ServerService) {}
    
    onSave() {
        this.serverService.storeRecipes()
            .subscribe(
                (response: Response) => console.log(response.json())
            );
    }

    onFetch() {
        this.serverService.getRecipes()
            .subscribe(
                (response: Response) => console.log(response.json())
            )
    }
}