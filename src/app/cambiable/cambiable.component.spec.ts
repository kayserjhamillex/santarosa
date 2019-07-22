import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiableComponent } from './cambiable.component';

describe('CambiableComponent', () => {
  let component: CambiableComponent;
  let fixture: ComponentFixture<CambiableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
