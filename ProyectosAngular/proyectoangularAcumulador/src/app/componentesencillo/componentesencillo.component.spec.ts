import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesencilloComponent } from './componentesencillo.component';

describe('ComponentesencilloComponent', () => {
  let component: ComponentesencilloComponent;
  let fixture: ComponentFixture<ComponentesencilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentesencilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesencilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
