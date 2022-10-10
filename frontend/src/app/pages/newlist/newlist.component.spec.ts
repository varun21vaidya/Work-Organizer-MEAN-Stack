import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlistComponent } from './newlist.component';

describe('NewlistComponent', () => {
  let component: NewlistComponent;
  let fixture: ComponentFixture<NewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
