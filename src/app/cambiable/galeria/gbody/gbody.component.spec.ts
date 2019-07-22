import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbodyComponent } from './gbody.component';

describe('GbodyComponent', () => {
  let component: GbodyComponent;
  let fixture: ComponentFixture<GbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
