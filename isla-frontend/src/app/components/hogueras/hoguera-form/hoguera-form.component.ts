import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-hoguera-form',
  standalone: true,
  imports: [HeaderComponent,FormsModule, HttpClientModule, NgIf, NgFor, NgClass],
  templateUrl: './hoguera-form.component.html',
  styleUrls: ['./hoguera-form.component.css']
})
export class HogueraFormComponent {
  hoguera = {
    nombre: '',
    temporada: null,
    ubicacion: '',
    parejas: null
  };
  errores: Record<string, string> = {};

  constructor(private http: HttpClient) {}

  enviarFormulario() {
    this.errores = {};  // Reinicia errores

    if (!this.hoguera.nombre.trim()) {
      this.errores['nombre'] = 'El nombre es obligatorio.';
    }

    if (this.hoguera.temporada == null || this.hoguera.temporada <= 0) {
      this.errores['temporada'] = 'Debes indicar una temporada válida.';
    }

    if (!this.hoguera.ubicacion) {
      this.errores['ubicacion'] = 'Debes seleccionar una ubicación.';
    }

    if (!this.hoguera.parejas) {
      this.errores['parejas'] = 'Debes seleccionar parejas.';
    }

    if (Object.keys(this.errores).length > 0) return;

    this.http.post('http://localhost:5000/hogueras', this.hoguera)
      .subscribe({
        next: () => alert('Hoguera creada correctamente'),
        error: (err) => console.error(err)
      });
  }
}
