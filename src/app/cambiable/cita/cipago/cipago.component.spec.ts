import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CipagoComponent } from './cipago.component';

describe('CipagoComponent', () => {
  let component: CipagoComponent;
  let fixture: ComponentFixture<CipagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CipagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CipagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
