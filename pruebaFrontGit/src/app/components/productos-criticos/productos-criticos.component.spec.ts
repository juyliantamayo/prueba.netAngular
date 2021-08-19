import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCriticosComponent } from './productos-criticos.component';

describe('ProductosCriticosComponent', () => {
  let component: ProductosCriticosComponent;
  let fixture: ComponentFixture<ProductosCriticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosCriticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosCriticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
