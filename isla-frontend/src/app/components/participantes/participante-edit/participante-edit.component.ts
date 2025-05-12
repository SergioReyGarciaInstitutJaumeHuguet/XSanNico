import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para [(ngModel)]
import { CommonModule } from '@angular/common'; // Importa CommonModule para directivas básicas
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipanteService } from '../../../services/participante.service';
import { Participante } from '../../../models/participante.model';

@Component({
  selector: 'app-participante-edit',
  standalone: true,
  imports: [FormsModule, CommonModule], // Asegúrate de incluir FormsModule y CommonModule aquí
  templateUrl: './participante-edit.component.html',
  styleUrls: ['./participante-edit.component.css'],
})
export class ParticipanteEditComponent implements OnInit {
  participante: Participante = { nombre: '', edad: 0, genero: '', rol: 'pareja', temporada: 0 };

  constructor(
    private participanteService: ParticipanteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Obtiene el ID de la URL
    if (id) {
      this.participanteService.getById(id).subscribe((data) => (this.participante = data)); // Carga los datos del participante
    }
  }

  save(): void {
    if (this.participante._id) {
      // Actualiza el participante existente
      this.participanteService.update(this.participante._id, this.participante).subscribe(() => {
        this.router.navigate(['/participantes']); // Redirige a la lista de participantes
      });
    }
  }
}