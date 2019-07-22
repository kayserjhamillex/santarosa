import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiiniciadoComponent } from './ciiniciado.component';

describe('CiiniciadoComponent', () => {
  let component: CiiniciadoComponent;
  let fixture: ComponentFixture<CiiniciadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiiniciadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiiniciadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
