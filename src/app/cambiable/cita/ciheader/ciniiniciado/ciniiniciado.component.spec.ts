import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiniiniciadoComponent } from './ciniiniciado.component';

describe('CiniiniciadoComponent', () => {
  let component: CiniiniciadoComponent;
  let fixture: ComponentFixture<CiniiniciadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiniiniciadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiniiniciadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
