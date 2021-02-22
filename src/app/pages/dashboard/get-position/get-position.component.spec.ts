import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPositionComponent } from './get-position.component';

describe('GetPositionComponent', () => {
  let component: GetPositionComponent;
  let fixture: ComponentFixture<GetPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
