import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participante } from '../models/participante.model';

@Injectable({ providedIn: 'root' })
export class ParticipanteService {
  private apiUrl = 'http://localhost:5000/participantes';

  constructor(private http: HttpClient) {}

  // Obtener todos los participantes
  getAll(): Observable<Participante[]> {
    return this.http.get<Participante[]>(this.apiUrl);
  }

  // Obtener un participante por ID
  getById(id: string): Observable<Participante> {
    return this.http.get<Participante>(`${this.apiUrl}/${id}`);
  }

  // Actualizar un participante
  update(id: string, participante: Participante): Observable<Participante> {
    return this.http.put<Participante>(`${this.apiUrl}/${id}`, participante);
  }

  // Eliminar un participante
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}