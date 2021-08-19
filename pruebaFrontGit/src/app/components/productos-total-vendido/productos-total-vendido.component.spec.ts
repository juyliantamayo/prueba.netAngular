import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosTotalVendidoComponent } from './productos-total-vendido.component';

describe('ProductosTotalVendidoComponent', () => {
  let component: ProductosTotalVendidoComponent;
  let fixture: ComponentFixture<ProductosTotalVendidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosTotalVendidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosTotalVendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
