import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailnavComponent } from './railnav.component';

describe('RailnavComponent', () => {
  let component: RailnavComponent;
  let fixture: ComponentFixture<RailnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
