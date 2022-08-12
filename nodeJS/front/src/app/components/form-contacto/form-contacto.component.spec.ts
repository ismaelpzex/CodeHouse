import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContactoComponent } from './form-contacto.component';

describe('FormContactoComponent', () => {
  let component: FormContactoComponent;
  let fixture: ComponentFixture<FormContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
