import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/Product";
import { CartService } from "src/app/services/cart.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  @Input() product: Product;
  cartProducts = this.cartService.getItems();
  cartTotal = 0;
  name = "";
  address = "";
  creditCard = "";
  amount = 0;
  options = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
  ];
  // amount = this.cartService.amount;

  constructor(private cartService: CartService) {
    this.cartTotal = 0;
  }

  ngOnInit(): void {
    this.cartTotal = this.cartService.calculateCart();
  }
  ngOnChange(): void {
    this.cartTotal = this.cartService.calculateCart();
  }
  updateAmount(product: Product, value: number): void {
    this.cartService.updateAmount(product, value);
  }
  removerFromCart(prod: Product) {
    this.cartService.removerFromCart(prod);
    alert("prod removed");
  }
  onSubmit(): void {
    // this.Router.navigate(['/confirm'])
  }
}
