import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/models/Product";
import { CartService } from "src/app/services/cart.service";
import { FormsModule } from "@angular/forms";
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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onAmountSelect(product: Product, value: number): boolean {
    product.amount = value;
    return true;
    //alert(product.amount);
  }

  addToCart(product: Product): void {

    if (!product.amount) {
      alert("you must select an amount");
    }
    if (product.amount > 0) this.cartService.addToCart(product);
    this.cartService.calculateCart();

    //alert(product.price * product.amount);
  }
}
