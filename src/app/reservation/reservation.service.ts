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

  GetReservation(id: string): Reservation | undefined {
    let reservations =  this.reservations.find(res => res.id === id);
    console.log('GetReservation: ', reservations);
    
    return reservations;
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString()
    this.reservations.push(reservation)       
  }
  
  deleteReservation(id: string): void{
    let index = this.reservations.findIndex(res => res.id === id)
    this.reservations.splice(index,1)   
  }

  updateReservation(id: string, updateReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === id)    
    this.reservations[index] = updateReservation 
  }
}
