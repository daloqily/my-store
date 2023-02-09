import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/models/Product";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/product.service";
import { CartService } from "src/app/services/cart.service";
@Component({
  selector: "app-product-item-detail",
  templateUrl: "./product-item-detail.component.html",
  styleUrls: ["./product-item-detail.component.css"],
})
export class ProductItemDetailComponent implements OnInit {
  @Input() product: Product;

  @Output() OnAmountSelect: EventEmitter<Product> = new EventEmitter();
  @Output() AddToCart: EventEmitter<Product> = new EventEmitter();
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

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.product = this.productService.getProductById(params["id"]);
  }
  onAmountSelect(value: number): void {
    this.amount = value;
  }

  addToCart(product: Product, amount: number): void {
    this.cartService.addToCart(product, this.amount);
    alert("your product is added successfullly to the cart ");
  }
}
