import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIncrementorComponent } from './show-incrementor.component';

describe('ShowIncrementorComponent', () => {
  let component: ShowIncrementorComponent;
  let fixture: ComponentFixture<ShowIncrementorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIncrementorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowIncrementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
