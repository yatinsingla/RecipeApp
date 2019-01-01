import { Component } from "@angular/core";
import { Response } from '@angular/http';

import { ServerService } from '../shared/server.service';
import { AuthService } from '../auth/auth.service';
import { auth } from "firebase";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    
    constructor(private serverService: ServerService, private authService: AuthService) {}
    
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

    onLogout() {
        this.authService.logout();
    }
}