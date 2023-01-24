import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './layout/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductService } from "./services/product.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterLink } from "@angular/router";
@NgModule({
    declarations: [AppComponent, HeaderComponent, CartComponent, ConfirmationComponent, ProductListComponent, ProductItemComponent, ProductItemDetailComponent],
    providers: [ProductService],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, RouterLink]
})
export class AppModule {}
