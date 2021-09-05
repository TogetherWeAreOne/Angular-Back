import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuctionSale} from "../../models/auctionSale.model";
import {ProductService} from "../../services/product.service";
import {AuctionSaleService} from "../../services/auctionSale.service";
import {Event} from "../../models/event.model";

@Component({
  selector: 'app-auction-sales',
  templateUrl: './auction-sales.component.html',
  styleUrls: ['./auction-sales.component.css']
})
export class AuctionSalesComponent implements OnInit, OnChanges {

  sales : AuctionSale[] = []

  constructor(private auctionSaleService: AuctionSaleService) { }

  ngOnInit(): void {
    this.load()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.load()
  }

  private load() {
    this.auctionSaleService.getAllAuctionSale().subscribe(s => this.sales = s);
    console.log(this.sales);
  }

  update(sale: AuctionSale) {
    //TODO: Implement Update AuctionSale
  }

  delete(sale: AuctionSale) {
    //TODO: Implement Delete AuctionSale
  }
}
