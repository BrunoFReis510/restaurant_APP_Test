// restaurant.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = 'http://localhost:4200/api/';
  private apiKey = 'JE-API-KEY abcd123456789';


  constructor(private http: HttpClient) {}
  updateOrder(orderId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `JE-API-KEY ${this.apiKey}`
    });
  
    return this.http.put(`${this.apiUrl}/${orderId}`, null, { headers });
  }
  
  getRestaurants(postcode: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurants/bypostcode/${postcode}`);
  }

  getRestaurantDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
