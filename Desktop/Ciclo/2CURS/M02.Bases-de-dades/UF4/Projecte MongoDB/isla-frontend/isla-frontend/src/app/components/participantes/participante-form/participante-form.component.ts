import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-participante-form',
  standalone: true,
  imports: [HeaderComponent,FormsModule, HttpClientModule, NgIf, NgFor, NgClass],
  templateUrl: './participante-form.component.html',
  styleUrls: ['./participante-form.component.css']
})
export class ParticipanteFormComponent {
  participante = {
    nombre: '',
    edad: 18,
    rol: '',
    temporada: null,
    genero: '',
    avatar: ''
  };
  edadInvalida = false;
  errores: Record<string, string> = {};

  avataresHombre = [
    { nombre: 'trump', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/TrumpPortrait.jpg/960px-TrumpPortrait.jpg' },
    { nombre: 'abascal', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Santiago_Abascal_2022_%28cropped%29.jpg/1200px-Santiago_Abascal_2022_%28cropped%29.jpg' },
    { nombre: 'cejas', url: 'https://img.asmedia.epimg.net/resizer/v2/CJZVRW3IJJMWFMXJ3HM6N4NFGE.jpg?auth=90cb3b24dd8a76fbad389abbe08bd7fcb5eacded1efe6458bcc712a47f26c635&width=1200&height=1200&smart=true' },
    { nombre: 'rubiales', url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Luis_Rubiales_2018.jpg'}
  ];
  avataresMujer = [
    { nombre: 'ayuso', url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Isabel_D%C3%ADaz_Ayuso_en_el_s%C3%A9ptimo_aniversario_de_El_Huffpost_%28cropped%29.jpg' },
    { nombre: 'carmen', url: 'https://album.mediaset.es/eimg/2020/03/23/WQruIayd9sWJP6TNjeu6N4.jpg' },
    { nombre: 'shakira', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2901.jpg' }
  ];

  indiceSeleccionado = 0;
  direccionAnimacion: 'left' | 'right' = 'right';

  constructor(private http: HttpClient) {}

  get avataresDisponibles() {
    return this.participante.genero === 'hombre'
      ? this.avataresHombre
      : this.participante.genero === 'mujer'
      ? this.avataresMujer
      : [];
  }
  
  cambiarAvatar(direccion: number) {
    const nuevoIndice = this.indiceSeleccionado + direccion;
    if (nuevoIndice >= 0 && nuevoIndice < this.avataresDisponibles.length) {
      this.indiceSeleccionado = nuevoIndice;
    }
  }
  
  seleccionarAvatar(avatar: { nombre: string; url: string }) {
    this.participante.avatar = avatar.nombre;
  }

  enviarFormulario() {
    this.errores = {};  // Reinicia errores

    if (!this.participante.nombre.trim()) {
      this.errores['nombre'] = 'El nombre es obligatorio.';
    }

    if (
      this.participante.edad == null ||
      this.participante.edad < 18 ||
      this.participante.edad > 30
    ) {
      this.errores['edad'] = 'La edad debe estar entre 18 y 30 años.';
    }

    if (!this.participante.rol) {
      this.errores['rol'] = 'Debes seleccionar un rol.';
    }

    if (this.participante.temporada == null || this.participante.temporada <= 0) {
      this.errores['temporada'] = 'Debes indicar una temporada válida.';
    }

    if (!this.participante.genero) {
      this.errores['genero'] = 'Debes seleccionar un género.';
    }

    if (!this.participante.avatar) {
      this.errores['avatar'] = 'Debes seleccionar un avatar.';
    }

    if (Object.keys(this.errores).length > 0) return;

    this.http.post('http://localhost:5000/participantes', this.participante)
      .subscribe({
        next: () => alert('Participante creado correctamente'),
        error: (err) => console.error(err)
      });
  }
}
