import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionSalesComponent } from './auction-sales.component';

describe('AuctionSalesComponent', () => {
  let component: AuctionSalesComponent;
  let fixture: ComponentFixture<AuctionSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
