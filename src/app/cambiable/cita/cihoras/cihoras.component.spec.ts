import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CihorasComponent } from './cihoras.component';

describe('CihorasComponent', () => {
  let component: CihorasComponent;
  let fixture: ComponentFixture<CihorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CihorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CihorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
