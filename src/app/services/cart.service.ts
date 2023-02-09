import { Injectable } from "@angular/core";
import { Product } from "../models/Product";
@Injectable({
  providedIn: "root",
})
export class CartService {
  cartProducts: Product[] = [];
  amount: number;

  addToCart(product: Product, amount: number) {
    this.cartProducts.push(product);
    this.amount = amount;
  }

  getItems(): Product[] {
    return this.cartProducts;
  }

  calculateCart(product: Product): number {
    return product.price * this.amount;
  }

  constructor() {}
}
