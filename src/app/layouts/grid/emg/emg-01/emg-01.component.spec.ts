import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emg01Component } from './emg-01.component';

describe('Emg01Component', () => {
  let component: Emg01Component;
  let fixture: ComponentFixture<Emg01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emg01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Emg01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
