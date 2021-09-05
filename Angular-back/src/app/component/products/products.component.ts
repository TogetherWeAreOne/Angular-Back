import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {
  products: Product[] = []

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.load()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.load()
  }

  private load() {
    this.productService.getAllProducts().subscribe(p => this.products = p);
    console.log(this.products);
  }

  delete(product: Product) {
    //TODO: Implement Delete Product
  }

}
