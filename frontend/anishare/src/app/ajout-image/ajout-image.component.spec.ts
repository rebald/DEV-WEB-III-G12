import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutImageComponent } from './ajout-image.component';

describe('AjoutImageComponent', () => {
  let component: AjoutImageComponent;
  let fixture: ComponentFixture<AjoutImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
