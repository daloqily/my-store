import { Injectable } from "@angular/core";
import { Product } from "../models/Product";
@Injectable({
  providedIn: "root",
})
export class CartService {
  cartProducts: Product[] = [];
  // amount: number;
  cartTotal: number;

  addToCart(product: Product, amount: number) {
    this.cartProducts.push(product);
    alert(product.price * amount);
    //this.calculateCart();
  }

  getItems(): Product[] {
    return this.cartProducts;
  }

  calculateCart(): number {
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.cartTotal = +this.cartProducts[i].price;
    }
    return this.cartTotal;
  }

  constructor() {}
}
