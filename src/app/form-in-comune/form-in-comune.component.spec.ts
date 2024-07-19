import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInComuneComponent } from './form-in-comune.component';

describe('FormInComuneComponent', () => {
  let component: FormInComuneComponent;
  let fixture: ComponentFixture<FormInComuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormInComuneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInComuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
