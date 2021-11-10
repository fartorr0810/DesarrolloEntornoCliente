import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuanitoJuanComponent } from './juanito-juan.component';

describe('JuanitoJuanComponent', () => {
  let component: JuanitoJuanComponent;
  let fixture: ComponentFixture<JuanitoJuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuanitoJuanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuanitoJuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
