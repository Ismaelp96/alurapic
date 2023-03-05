import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadButoonComponent } from './load-button.component';

describe('LoadButoonComponent', () => {
  let component: LoadButoonComponent;
  let fixture: ComponentFixture<LoadButoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadButoonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadButoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
