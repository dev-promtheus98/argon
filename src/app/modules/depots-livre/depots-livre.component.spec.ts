import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotsLivreComponent } from './depots-livre.component';

describe('DepotsLivreComponent', () => {
  let component: DepotsLivreComponent;
  let fixture: ComponentFixture<DepotsLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotsLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotsLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
