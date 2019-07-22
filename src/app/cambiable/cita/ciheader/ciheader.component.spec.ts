import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiheaderComponent } from './ciheader.component';

describe('CiheaderComponent', () => {
  let component: CiheaderComponent;
  let fixture: ComponentFixture<CiheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
