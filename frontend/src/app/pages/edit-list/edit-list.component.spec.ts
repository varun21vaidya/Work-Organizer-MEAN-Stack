import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListComponent } from './edit-list.component';

describe('EditListComponent', () => {
  let component: EditListComponent;
  let fixture: ComponentFixture<EditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
