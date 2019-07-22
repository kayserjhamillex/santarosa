import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CibodyComponent } from './cibody.component';

describe('CibodyComponent', () => {
  let component: CibodyComponent;
  let fixture: ComponentFixture<CibodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CibodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CibodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
