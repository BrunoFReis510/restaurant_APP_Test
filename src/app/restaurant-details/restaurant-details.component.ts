// restaurant-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurant: any;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit() {
    // Obter o ID do restaurante da rota
    const id = this.route.snapshot.paramMap.get('id');

    // Obter os detalhes do restaurante com base no ID
    this.restaurantService.getRestaurantDetails(Number(id)).subscribe(data => {
      this.restaurant = data;
    });
  }
}
