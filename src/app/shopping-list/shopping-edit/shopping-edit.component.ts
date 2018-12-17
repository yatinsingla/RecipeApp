import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @ViewChild('nameInput') nameInput: ElementRef;
  // @ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('f') shoppingEditForm: NgForm;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    // const ingName = this.nameInput.nativeElement.value;
    // const ingAmount = this.amountInput.nativeElement.value;
    const ingName = this.shoppingEditForm.value.name;
    const ingAmount = this.shoppingEditForm.value.amount;
    const newIngreddient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngreddient);
  }

}
