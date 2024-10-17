import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaDetallesComponent } from './materia-detalles.component';

describe('MateriaDetallesComponent', () => {
  let component: MateriaDetallesComponent;
  let fixture: ComponentFixture<MateriaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriaDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
