import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { HogueraService } from '../../../services/hoguera.service';
import { Hoguera } from '../../../models/hoguera.model';

@Component({
  selector: 'app-hoguera-form',
  standalone: true,
  imports: [HeaderComponent, FormsModule, HttpClientModule, NgIf, NgFor, NgClass],
  templateUrl: './hoguera-form.component.html',
  styleUrls: ['./hoguera-form.component.css'],
  providers: [HogueraService]
})
export class HogueraFormComponent {
  hoguera: Partial<Hoguera> = {
    nombre: '',
    temporada: 0,
    ubicacion: '',
    parejas: 0
  };
  errores: Record<string, string> = {};

  constructor(private hogueraService: HogueraService) {}

  enviarFormulario() {
    this.errores = {};

    if (!this.hoguera.nombre?.trim()) {
      this.errores['nombre'] = 'El nombre es obligatorio.';
    }

    if (this.hoguera.temporada == null || this.hoguera.temporada <= 0) {
      this.errores['temporada'] = 'Debes indicar una temporada válida.';
    }

    if (!this.hoguera.ubicacion?.trim()) {
      this.errores['ubicacion'] = 'Debes seleccionar una ubicación.';
    }

    if (this.hoguera.parejas == null || this.hoguera.parejas <= 0) {
      this.errores['parejas'] = 'Debes seleccionar parejas.';
    }

    if (Object.keys(this.errores).length > 0) return;

    this.hogueraService.create(this.hoguera as Hoguera).subscribe({
      next: (data: Hoguera) => {
        alert('Hoguera creada correctamente');
        console.log('Hoguera guardada:', data);
        // Opcional: limpiar formulario
        this.hoguera = { nombre: '', temporada: 0, ubicacion: '', parejas: 0 };
      },
      error: (err) => {
        console.error('Error al guardar la hoguera:', err);
        alert('Error al guardar la hoguera');
      }
    });
  }
}
