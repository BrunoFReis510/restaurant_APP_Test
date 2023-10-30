// restaurant-list.component.ts
import { Component} from '@angular/core';
import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {
  restaurants: any[] = []; // Inicializando a propriedade aqui
  postalCode: string = '';

  constructor(private restaurantService: RestaurantService) { }

  fetchRestaurants(postalCode:string) {
    this.restaurantService.getRestaurants(postalCode).subscribe(data => {
      
      this.restaurants = data.Restaurants.reduce((acc:Array<object>,restaurant:any) => {
        if (restaurant.IsOpenNow){ 
          const restaurantData = {
            name: restaurant.Name, 
            rating: restaurant.RatingStars,
            cuisineTypes: restaurant.CuisineTypes.map((type: { Name: any; }) => type.Name).join(", ")
          }
          return [...acc,restaurantData]
        }
        return acc
        
      },[]);
    });
  }
  handleSearch() {

    console.log('Write the postal Code', this.postalCode);
    this.fetchRestaurants(this.postalCode);
  }

}
