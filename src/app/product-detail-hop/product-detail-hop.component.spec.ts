import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailHopComponent } from './product-detail-hop.component';

describe('ProductDetailHopComponent', () => {
  let component: ProductDetailHopComponent;
  let fixture: ComponentFixture<ProductDetailHopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailHopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailHopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
