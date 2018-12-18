import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f') shoppingEditForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemId: number;
  ingredientToEdit: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.editingStarted.subscribe(
      (id) => {
        this.editMode = true;
        this.editedItemId = id;
        this.ingredientToEdit = this.shoppingListService.getIngredient(id);
        this.shoppingEditForm.setValue({
          name: this.ingredientToEdit.name,
          amount: this.ingredientToEdit.amount
        })
      }
    )
  }

  onClear() {
    this.shoppingEditForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemId);
    this.onClear();
  }

  onAddItem() {
    const ingName = this.shoppingEditForm.value.name;
    const ingAmount = this.shoppingEditForm.value.amount;
    const newIngreddient = new Ingredient(ingName, ingAmount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemId, newIngreddient);
    } else {
      this.shoppingListService.addIngredient(newIngreddient);
    }
    this.onClear();
  }

}
