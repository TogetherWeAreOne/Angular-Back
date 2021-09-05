import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../models/product.model";
import {ProductCategoryService} from "../../../services/productCategory.service";
import {ProductCategory} from "../../../models/productCategory.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input() product! : Product;
  productToUpdate! : Product ;
  productCategories! : ProductCategory[];

  updateProductForm! : FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private productService: ProductService,
              private productCategoryService: ProductCategoryService,
              private activatedRoute: ActivatedRoute,) {
  }


  ngOnInit(): void {
    console.log(this.product);
    this.productCategoryService.getAllProductCategory().subscribe(categories => {
      this.productCategories = categories
      console.log("******************************")
      console.log(this.productCategories)
    });
    this.productService.getProductById(this.activatedRoute.snapshot.paramMap.get("id")!).subscribe( result => {(this.productToUpdate = result)});

    this.updateProductForm = this.fb.group({
      name: [this.product.name, [Validators.required]],
      description: [this.product.description, [Validators.required]],
      price: [this.product.price, [Validators.required]],
      category: [this.product.category, [Validators.required]],
      quantity: [this.product.quantity, [Validators.required]],
      negotiable: [this.product.negotiable, [Validators.required]],
    });

  }

  onSubmit(): void {
    let product = (this.updateProductForm.value as Product);
    this.productService.updateProduct(this.productToUpdate.id!, product).subscribe();

  }
}
