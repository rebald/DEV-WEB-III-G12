import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropoComponent } from './propo.component';

describe('PropoComponent', () => {
  let component: PropoComponent;
  let fixture: ComponentFixture<PropoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
