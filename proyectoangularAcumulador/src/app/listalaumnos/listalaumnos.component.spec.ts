import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalaumnosComponent } from './listalaumnos.component';

describe('ListalaumnosComponent', () => {
  let component: ListalaumnosComponent;
  let fixture: ComponentFixture<ListalaumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListalaumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListalaumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
