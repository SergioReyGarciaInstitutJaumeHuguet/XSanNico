import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { ParticipanteService } from '../../../services/participante.service';
import { Participante } from '../../../models/participante.model';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-participante-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule], // Asegúrate de incluir RouterModule aquí
  templateUrl: './participante-list.component.html',
  styleUrls: ['./participante-list.component.css'],
})
export class ParticipanteListComponent implements OnInit {
  participantes: Participante[] = [];

  avataresHombre = [
    { nombre: '0', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/TrumpPortrait.jpg/960px-TrumpPortrait.jpg' },
    { nombre: '1', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Santiago_Abascal_2022_%28cropped%29.jpg/1200px-Santiago_Abascal_2022_%28cropped%29.jpg' },
    { nombre: '2', url: 'https://img.asmedia.epimg.net/resizer/v2/CJZVRW3IJJMWFMXJ3HM6N4NFGE.jpg?auth=90cb3b24dd8a76fbad389abbe08bd7fcb5eacded1efe6458bcc712a47f26c635&width=1200&height=1200&smart=true' },
    { nombre: '3', url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Luis_Rubiales_2018.jpg' }
  ];

  avataresMujer = [
    { nombre: '4', url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Isabel_D%C3%ADaz_Ayuso_en_el_s%C3%A9ptimo_aniversario_de_El_Huffpost_%28cropped%29.jpg' },
    { nombre: '5', url: 'https://album.mediaset.es/eimg/2020/03/23/WQruIayd9sWJP6TNjeu6N4.jpg' },
    { nombre: '6', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2901.jpg' }
  ];

  constructor(private participanteService: ParticipanteService) {}

  ngOnInit(): void {
    this.participanteService.getAll().subscribe({
      next: (data) => {
        console.log('Participantes cargados:', data);
        this.participantes = data;
      },
      error: (error) => {
        console.error('Error al obtener los participantes:', error);
      },
    });
  }

  getAvatarUrl(participante: Participante): string {
    const index = Number(participante.foto);
    console.log('Index:', index);
    if (isNaN(index)) return '';

    const genero = participante.genero?.toLowerCase();

    if (genero === 'hombre') {
      return this.avataresHombre[index]?.url || '';
    }

    if (genero === 'mujer') {
      const mujerIndex = index - 4; // porque en tu array empiezan desde foto '4'
      return this.avataresMujer[mujerIndex]?.url || '';
    }

    return '';
  }
}
