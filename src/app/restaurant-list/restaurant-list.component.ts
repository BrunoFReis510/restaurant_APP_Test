// restaurant-list.component.ts
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: any[] = []; // Inicializando a propriedade aqui

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    // Obter a lista de restaurantes ao inicializar o componente
    this.restaurantService.getRestaurants('SE1').subscribe(data => {
      this.restaurants = data;
    });
  }
}
