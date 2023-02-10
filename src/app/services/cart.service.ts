import { Injectable } from "@angular/core";
import { Product } from "../models/Product";
@Injectable({
  providedIn: "root",
})
export class CartService {
  cartProducts: Product[] = [];
  // amount: number;
  cartTotal = 0;
  userInfo = {
    name: "",
    address: "",
    creditCart: "",
  };
  addToCart(product: Product) {
    // this.cartProducts.push(product);

    if (this.cartProducts.find((x) => x.id == product.id)) {
      alert(`product ${product.name} already added`);

      return this.cartProducts;
    } else {
      this.cartProducts.push(product);
      alert(`product ${product.name}  added successfully`);

      return this.cartProducts;
    }

    //this.calculateCart();
  }
  removerFromCart(prod: Product): void {
    this.cartProducts = this.cartProducts.filter((product) => product != prod);
    alert(`product ${prod.name} removed successfully`);
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
  setUserInfo(name: string, address: string, CreditCard: string): void {
    this.userInfo.name = name;
    this.userInfo.address = address;
    this.userInfo.creditCart = CreditCard;
  }

  constructor() {}
}
