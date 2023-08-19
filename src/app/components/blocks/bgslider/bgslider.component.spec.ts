import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgsliderComponent } from './bgslider.component';

describe('BgsliderComponent', () => {
  let component: BgsliderComponent;
  let fixture: ComponentFixture<BgsliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BgsliderComponent]
    });
    fixture = TestBed.createComponent(BgsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
