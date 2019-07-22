import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CilogueoComponent } from './cilogueo.component';

describe('CilogueoComponent', () => {
  let component: CilogueoComponent;
  let fixture: ComponentFixture<CilogueoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CilogueoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CilogueoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
