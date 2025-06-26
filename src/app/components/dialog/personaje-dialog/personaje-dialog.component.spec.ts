import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeDialogComponent } from './personaje-dialog.component';

describe('PersonajeDialogComponent', () => {
  let component: PersonajeDialogComponent;
  let fixture: ComponentFixture<PersonajeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
