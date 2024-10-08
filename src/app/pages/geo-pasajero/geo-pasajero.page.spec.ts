import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeoPasajeroPage } from './geo-pasajero.page';

describe('GeoPasajeroPage', () => {
  let component: GeoPasajeroPage;
  let fixture: ComponentFixture<GeoPasajeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
