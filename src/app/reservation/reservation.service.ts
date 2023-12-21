import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] =[]

  /**
   *
   */
  constructor() {
   let saveReservation = localStorage.getItem("reservations")
   this.reservations = saveReservation? JSON.parse(saveReservation) : []
    
  }
  // CRUD
  GetReservations(){
    return this.reservations;
  }

  GetReservation(id: string): Reservation | undefined {
    let reservations =  this.reservations.find(res => res.id === id);
    console.log('GetReservation: ', reservations);
    
    return reservations;
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString()
    this.reservations.push(reservation)
    localStorage.setItem("reservations",JSON.stringify(this.reservations))       
  }
  
  deleteReservation(id: string): void{
    let index = this.reservations.findIndex(res => res.id === id)
    this.reservations.splice(index,1)
    localStorage.setItem("reservations",JSON.stringify(this.reservations)) 
  }

  updateReservation(id: string, updateReservation: Reservation): void {

    let index = this.reservations.findIndex(res => res.id === id)    
    this.reservations[index] = updateReservation
    localStorage.setItem("reservations",JSON.stringify(this.reservations)) 
  }
}
