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
  onAmountSelect(product: Product, value: number): void {
    product.amount = value;
    alert(product.amount);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.cartService.calculateCart();
    alert("your product is added successfullly to the cart ");
  }
}
