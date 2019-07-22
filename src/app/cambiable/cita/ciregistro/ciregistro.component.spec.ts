import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiregistroComponent } from './ciregistro.component';

describe('CiregistroComponent', () => {
  let component: CiregistroComponent;
  let fixture: ComponentFixture<CiregistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiregistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
