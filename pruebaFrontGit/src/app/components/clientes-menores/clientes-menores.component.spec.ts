import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesMenoresComponent } from './clientes-menores.component';

describe('ClientesMenoresComponent', () => {
  let component: ClientesMenoresComponent;
  let fixture: ComponentFixture<ClientesMenoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesMenoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesMenoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
