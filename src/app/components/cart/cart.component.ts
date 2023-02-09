import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/Product";
import { CartService } from "src/app/services/cart.service";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  @Input() product: Product;
  cartProducts = this.cartService.getItems();
  cartTotal: number = this.cartService.calculateCart();
  // amount = this.cartService.amount;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
  ngOnChange(): void{
    this.cartTotal = this.cartService.calculateCart();
  }
}
