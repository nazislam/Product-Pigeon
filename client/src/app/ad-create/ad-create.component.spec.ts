import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCreateComponent } from './ad-create.component';

describe('AdCreateComponent', () => {
  let component: AdCreateComponent;
  let fixture: ComponentFixture<AdCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
