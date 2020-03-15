import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const baseUrl = environment.baseUrl;
const appKey = environment.appKey;
const appSecret = environment.appSecret;

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  categories = {
    'Vegetables and legumes/beans': 'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg',
    'Grain Food': 'https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg',
    Fruits: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg',
    'Milk, cheese, eggs and alternatives':
      'https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg',
    'Lean meats and poultry, fish and alternatives':
      'https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg'
  };

  appDataUrl = `${baseUrl}/appdata/${appKey}/recipes`;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  get httpKinveyOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Kinvey ${sessionStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    };
  }

  createRecipe(input) {
    const category = input.category;

    const data = {
      meal: input.meal,
      ingredients: input.ingredients.split(' '),
      prepMethod: input.prepMethod,
      description: input.description,
      category: input.category,
      foodImageURL: input.foodImageURL,
      categoryImageURL: this.categories[category],
      likesCounter: 0
    };

    return this.http.post(`${this.appDataUrl}`, JSON.stringify(data), this.httpKinveyOptions);

  }

  editRecipe(input, id) {
    const category = input.category;

    const data = {
      meal: input.meal,
      ingredients: input.ingredients.split(' '),
      prepMethod: input.prepMethod,
      description: input.description,
      category: input.category,
      foodImageURL: input.foodImageURL,
      categoryImageURL: this.categories[category],
      likesCounter: input.likesCounter
    };

    return this.http.put(`${this.appDataUrl}/${id}`, JSON.stringify(data), this.httpKinveyOptions);
  }

  getRecipes() {
    return this.http.get(`${this.appDataUrl}`, this.httpKinveyOptions);
  }

  getRecipe(id) {
    return this.http.get(`${this.appDataUrl}/${id}`, this.httpKinveyOptions);
  }

  deleteRecipe(id) {
    return this.http.delete(`${this.appDataUrl}/${id}`, this.httpKinveyOptions);
  }
}
