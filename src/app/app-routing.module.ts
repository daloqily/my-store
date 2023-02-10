import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./components/cart/cart.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductItemDetailComponent } from "./components/product-item-detail/product-item-detail.component";
import { ConfirmationComponent } from "./components/confirmation/confirmation.component";
import { config } from "rxjs";
const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "cart", component: CartComponent },
  { path: "product-item", component: ProductItemComponent },
  { path: "product-detail/:id", component: ProductItemDetailComponent },
  { path: "confirmation/:id", component: ConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
