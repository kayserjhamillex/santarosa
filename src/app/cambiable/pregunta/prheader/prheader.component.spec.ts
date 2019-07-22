import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrheaderComponent } from './prheader.component';

describe('PrheaderComponent', () => {
  let component: PrheaderComponent;
  let fixture: ComponentFixture<PrheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
