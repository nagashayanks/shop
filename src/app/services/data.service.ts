import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getProductsFromApi = () => {
    return this._http.get("http://localhost:3000/products");
  }
}
