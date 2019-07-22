import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrbodyComponent } from './prbody.component';

describe('PrbodyComponent', () => {
  let component: PrbodyComponent;
  let fixture: ComponentFixture<PrbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
