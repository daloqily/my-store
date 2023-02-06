import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/models/Product";
import { ProductDataService } from "src/app/services/product-data.service";
import { CartService } from "src/app/services/cart.service";
@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"],
})
export class ProductItemComponent implements OnInit {
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
    public _productDataService: ProductDataService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  onAmountSelect(value: number): void {
    this.amount = value;
  }

  onDetailClick(product: Product): void {
    this._productDataService.product = product;
  }

  addToCart(product: Product, amount:number): void {

    this.cartService.addToCart(product, amount);
    alert("Your Product Has Been Added successfully");
  }
}
