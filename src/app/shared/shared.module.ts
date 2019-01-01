import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { DropdownDirective } from "./dropdown.directive";

@NgModule({
    declarations: [
        DropdownDirective
    ], 
    exports: [
        CommonModule,  // neccessary for ngIf, ngFor etc.
        DropdownDirective // to make assessible to outside
    ]
})
export class SharedModule {

}