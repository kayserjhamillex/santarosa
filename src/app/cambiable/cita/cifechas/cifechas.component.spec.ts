import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CifechasComponent } from './cifechas.component';

describe('CifechasComponent', () => {
  let component: CifechasComponent;
  let fixture: ComponentFixture<CifechasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CifechasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
