import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/models/Product";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/product.service";
import { CartService } from "src/app/services/cart.service";
@Component({
  selector: "app-confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.css"],
})
export class ConfirmationComponent implements OnInit {
  @Input() product: Product;

  products: Product[];
  name = "";
  totalcart = 0;
  ngOnInit(): void {
    this.totalcart = this.cartService.cartTotal;
    this.name = this.cartService.userInfo.name;
  }
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}
}
