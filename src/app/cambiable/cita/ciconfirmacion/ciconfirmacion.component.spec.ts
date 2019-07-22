import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiconfirmacionComponent } from './ciconfirmacion.component';

describe('CiconfirmacionComponent', () => {
  let component: CiconfirmacionComponent;
  let fixture: ComponentFixture<CiconfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiconfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiconfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
