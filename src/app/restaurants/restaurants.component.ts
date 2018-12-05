import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: RestaurantModel[];

  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantService.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants)
  }
}
