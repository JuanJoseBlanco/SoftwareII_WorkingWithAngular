import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasatiempoComponent } from './pasatiempo.component';

describe('PasatiempoComponent', () => {
  let component: PasatiempoComponent;
  let fixture: ComponentFixture<PasatiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasatiempoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasatiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
