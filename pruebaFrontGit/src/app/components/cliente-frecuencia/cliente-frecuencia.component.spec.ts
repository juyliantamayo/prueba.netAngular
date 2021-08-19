import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFrecuenciaComponent } from './cliente-frecuencia.component';

describe('ClienteFrecuenciaComponent', () => {
  let component: ClienteFrecuenciaComponent;
  let fixture: ComponentFixture<ClienteFrecuenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteFrecuenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFrecuenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
