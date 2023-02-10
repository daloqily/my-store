import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/Product";
import { CartService } from "src/app/services/cart.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  @Input() product: Product;
  cartProducts = this.cartService.getItems();
  cartTotal?;
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

  constructor(private route: Router, private cartService: CartService) {
    this.cartTotal = 0;
  }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getItems();
    this.cartTotal = this.cartService.calculateCart();
  }
  ngOnChange(): void {
    this.cartTotal = this.cartService.calculateCart();
  }
  updateAmount(product: Product, value: number): void {
    this.cartProducts = this.cartService.getItems();
    this.cartTotal = this.cartService.calculateCart();
  }
  removerFromCart(prod: Product) {
    this.cartService.removerFromCart(prod);
    this.cartProducts = this.cartService.getItems();
    this.cartTotal = this.cartService.calculateCart();
  }
  onSubmit(): void {
    alert("in onSubmit");
    this.cartService.setUserInfo(this.name, this.address, this.creditCard);
    this.route.navigate(["/confirmation"]);
  }
}
