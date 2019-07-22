import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiespecialidadComponent } from './ciespecialidad.component';

describe('CiespecialidadComponent', () => {
  let component: CiespecialidadComponent;
  let fixture: ComponentFixture<CiespecialidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiespecialidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
