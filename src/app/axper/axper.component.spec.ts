import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxperComponent } from './axper.component';

describe('AxperComponent', () => {
  let component: AxperComponent;
  let fixture: ComponentFixture<AxperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxperComponent]
    });
    fixture = TestBed.createComponent(AxperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
