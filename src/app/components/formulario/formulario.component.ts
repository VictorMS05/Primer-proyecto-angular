import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  id: number = 0;
  cod: number = 0;
  navigator: Router = new Router();
  url: ActivatedRoute = inject(ActivatedRoute);
  isInvalid: boolean = false;
  isAdmin: boolean = true;
  private formBuilder = new FormBuilder();
  materiasForm = this.formBuilder.group({
    id: ['', Validators.required],
    materia: ['', Validators.required],
    nivel: ['', Validators.required],
  })

  guardar() {
    console.log(this.materiasForm);
    this.isInvalid = this.materiasForm.controls.id.valid;
    console.log(this.isInvalid);
  }

  constructor(private userservice: AuthserviceService) {
    this.id = this.url.snapshot.params['id'];
    this.id = this.url.snapshot.params['cod'];
    let user = this.userservice.getuser();

    if (user.type == 2) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  irMaterias() {
    this.navigator.navigate(['materias']);
  }

}
