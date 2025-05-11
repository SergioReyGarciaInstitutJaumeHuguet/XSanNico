import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hoguera } from '../models/hoguera.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HogueraService {
  private apiUrl = 'http://localhost:5000/hogueras';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Hoguera[]> {
    return this.http.get<Hoguera[]>(this.apiUrl);
  }

  create(hoguera: Hoguera): Observable<Hoguera> {
    return this.http.post<Hoguera>(this.apiUrl, hoguera);
  }

  update(id: string, hoguera: Hoguera): Observable<Hoguera> {
    return this.http.put<Hoguera>(`${this.apiUrl}/${id}`, hoguera);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
