import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = "http://localhost:3001"

  private reservations: Reservation[] =[]

  constructor(private http: HttpClient) {}

  // CRUD
  GetReservations(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
  }

  GetReservation(id: string): Observable<Reservation>{
    return this.http.get<Reservation>(this.apiUrl + "/reservations/" + id);
  }

  addReservation(reservation: Reservation): Observable<void>{
    return this.http.post<void>(this.apiUrl + "/reservation", reservation);   
  }
  
  deleteReservation(id: string): Observable<void>{
    return this.http.delete<void>(this.apiUrl + "/reservations/" + id);    
  }

  updateReservation(id: string, updateReservation: Reservation): Observable<void> {
    return this.http.put<void>(this.apiUrl + "/reservations/" + id, updateReservation);   
  }
}
