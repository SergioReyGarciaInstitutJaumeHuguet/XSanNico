import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { HogueraService } from '../../../services/hoguera.service';
import { Hoguera } from '../../../models/hoguera.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-hoguera-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './hoguera-list.component.html',
  styleUrls: ['./hoguera-list.component.css'],
  providers: [HogueraService],
})
export class HogueraListComponent implements OnInit {
  hogueras: Hoguera[] = [];

  constructor(
    private hogueraService: HogueraService,
    private router: Router // Inyecta el servicio Router
  ) {}

  ngOnInit(): void {
    this.hogueraService.getAll().subscribe({
      next: (data) => {
        this.hogueras = data;
        console.log('Hogueras cargadas:', data);
      },
      error: (error) => {
        console.error('Error al obtener hogueras', error);
      },
    });
  }

  goToEdit(id: string | undefined): void {
    if (id) {
      this.router.navigate(['/hogueras/editar', id]); // Navega a la página de edición
    } else {
      console.error('El ID de la hoguera es undefined');
    }
  }
}