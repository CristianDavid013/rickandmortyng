import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'https://rickandmortyapi.com/api/location';

  constructor(private http: HttpClient) {}

  // Obtener todas las ubicaciones con paginación
  getLocations(page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?page=${page}`);
  }

  // Obtener una ubicación por ID
  getLocationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // ✅ Nuevo método para obtener una ubicación desde una URL completa
  getLocationByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
