import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailIbuComponent } from './product-detail-ibu.component';

describe('ProductDetailIbuComponent', () => {
  let component: ProductDetailIbuComponent;
  let fixture: ComponentFixture<ProductDetailIbuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailIbuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailIbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
