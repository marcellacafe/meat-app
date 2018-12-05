import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API} from "../app.api";
import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantsService {

  constructor (private http: Http, @Inject('MEAT_API') private apiUrl: string){}

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())

  }


}

