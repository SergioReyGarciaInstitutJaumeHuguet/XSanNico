import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participante } from '../models/participante.model';

@Injectable({ providedIn: 'root' })
export class ParticipanteService {
  private apiUrl = 'http://localhost:5000/participantes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Participante[]> {
    return this.http.get<Participante[]>(this.apiUrl);
  }
}