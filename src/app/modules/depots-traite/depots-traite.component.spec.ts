import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotsTraiteComponent } from './depots-traite.component';

describe('DepotsTraiteComponent', () => {
  let component: DepotsTraiteComponent;
  let fixture: ComponentFixture<DepotsTraiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotsTraiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotsTraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
