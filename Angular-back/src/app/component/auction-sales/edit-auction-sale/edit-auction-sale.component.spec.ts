import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAuctionSaleComponent } from './edit-auction-sale.component';

describe('EditAuctionSaleComponent', () => {
  let component: EditAuctionSaleComponent;
  let fixture: ComponentFixture<EditAuctionSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAuctionSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAuctionSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
