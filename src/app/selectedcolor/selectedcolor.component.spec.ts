import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedcolorComponent } from './selectedcolor.component';

describe('SelectedcolorComponent', () => {
  let component: SelectedcolorComponent;
  let fixture: ComponentFixture<SelectedcolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedcolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
