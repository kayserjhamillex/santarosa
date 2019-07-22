import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CipostergacionComponent } from './cipostergacion.component';

describe('CipostergacionComponent', () => {
  let component: CipostergacionComponent;
  let fixture: ComponentFixture<CipostergacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CipostergacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CipostergacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
