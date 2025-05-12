import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { HogueraService } from '../../../services/hoguera.service';
import { Hoguera } from '../../../models/hoguera.model'; // Asegúrate de tener esta interfaz
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hoguera-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './hoguera-list.component.html',
  styleUrls: ['./hoguera-list.component.css'],
  providers: [HogueraService] // o bien usa providedIn: 'root' en el servicio
})
export class HogueraListComponent implements OnInit {
  hogueras: Hoguera[] = []
  constructor(private hogueraService: HogueraService) {}

  ngOnInit(): void {
    this.hogueraService.getAll().subscribe({
      next: (data) => {
        this.hogueras = data;
        console.log('Hogueras cargadas:', data);
      },
      error: (error) => {
        console.error('Error al obtener hogueras', error);
      }
    });
  }
}