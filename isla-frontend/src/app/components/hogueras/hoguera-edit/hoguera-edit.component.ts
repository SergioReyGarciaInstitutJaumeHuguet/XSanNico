import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para [(ngModel)]
import { CommonModule } from '@angular/common'; // Importa CommonModule para directivas básicas
import { ActivatedRoute, Router } from '@angular/router';
import { HogueraService } from '../../../services/hoguera.service';
import { Hoguera } from '../../../models/hoguera.model';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-hoguera-edit',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule], // Asegúrate de incluir FormsModule y CommonModule aquí
  templateUrl: './hoguera-edit.component.html',
  styleUrls: ['./hoguera-edit.component.css'],
})
export class HogueraEditComponent implements OnInit {
  hoguera: Hoguera = { nombre: '', temporada: 0, ubicacion: '', parejas: 0 };

  constructor(
    private hogueraService: HogueraService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Obtiene el ID de la URL
    if (id) {
      this.hogueraService.getById(id).subscribe((data) => (this.hoguera = data)); // Carga los datos de la hoguera
    }
  }

  save(): void {
    if (this.hoguera._id) {
      // Actualiza la hoguera existente
      this.hogueraService.update(this.hoguera._id, this.hoguera).subscribe(() => {
        this.router.navigate(['/hogueras']); // Redirige a la lista de hogueras
      });
    }
  }

  delete(): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta hoguera?')) {
      if (this.hoguera._id) {
        this.hogueraService.delete(this.hoguera._id).subscribe(() => {
          alert('Hoguera eliminada correctamente');
          this.router.navigate(['/hogueras']); // Redirige a la lista de hogueras
        });
      }
    }
  }
}