import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailStyleComponent } from './product-detail-style.component';

describe('ProductDetailStyleComponent', () => {
  let component: ProductDetailStyleComponent;
  let fixture: ComponentFixture<ProductDetailStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
