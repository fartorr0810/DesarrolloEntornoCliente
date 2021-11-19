import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorizoComponent } from './chorizo.component';

describe('ChorizoComponent', () => {
  let component: ChorizoComponent;
  let fixture: ComponentFixture<ChorizoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChorizoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChorizoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
