import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiboletaComponent } from './ciboleta.component';

describe('CiboletaComponent', () => {
  let component: CiboletaComponent;
  let fixture: ComponentFixture<CiboletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiboletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiboletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
