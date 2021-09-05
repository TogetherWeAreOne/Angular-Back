import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {AuctionSale} from "../../../models/auctionSale.model";
import {AuctionSaleService} from "../../../services/auctionSale.service";
import {AuctionSaleCategoryService} from "../../../services/auctionSaleCategory.service";
import {AuctionSaleCategory} from "../../../models/auctionSaleCategory.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-auction-sale',
  templateUrl: './edit-auction-sale.component.html',
  styleUrls: ['./edit-auction-sale.component.css']
})
export class EditAuctionSaleComponent implements OnInit {

  @Input() auction! : AuctionSale;
  auctionToUpdate! : AuctionSale ;
  selectedCategory!: string;
  auctionSaleCategories! : AuctionSaleCategory[];

  updateAuctionForm! : FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private auctionService: AuctionSaleService,
              private auctionSaleCategoryService: AuctionSaleCategoryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.auctionSaleCategoryService.getAllAuctionSaleCategory().subscribe(categories => this.auctionSaleCategories = categories);
    this.auctionService.getAuctionSaleById(this.activatedRoute.snapshot.paramMap.get("id")!!).subscribe( result => {this.auctionToUpdate = result;
      this.selectedCategory = result.category!.name!});

    this.updateAuctionForm = this.fb.group({
      name: [this.auction.name, [Validators.required]],
      description: [this.auction.description, [Validators.required]],
      category: [this.auction.category, [Validators.required]],
    });

  }

  onSubmit(): void {
    console.log(this.updateAuctionForm.value);
    let auction = (this.updateAuctionForm.value as AuctionSale);
    this.auctionService.updateAuctionSale(this.auctionToUpdate.id!, auction).subscribe();

  }
}

