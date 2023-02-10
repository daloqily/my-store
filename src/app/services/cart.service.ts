import { Injectable } from "@angular/core";
import { Product } from "../models/Product";
@Injectable({
  providedIn: "root",
})
export class CartService {
  cartProducts: Product[] = [];
  // amount: number;
  cartTotal = 0;

  addToCart(product: Product) {
    this.cartProducts.push(product);

    //this.calculateCart();
  }
  removerFromCart(prod: Product): void {
    this.cartProducts = this.cartProducts.filter((product) => product != prod);
  }
  getItems(): Product[] {
    return this.cartProducts;
  }
  updateAmount(product: Product, updatedAmount: number): void {
    this.cartProducts[product.id].amount = updatedAmount;
  }
  calculateCart(): number {
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.cartTotal +=
        this.cartProducts[i].price * this.cartProducts[i].amount;
    }
    return this.cartTotal;
  }

  constructor() {}
}
