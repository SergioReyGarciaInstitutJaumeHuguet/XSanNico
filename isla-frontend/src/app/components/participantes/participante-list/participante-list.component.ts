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
}