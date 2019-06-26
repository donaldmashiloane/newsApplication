import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //API to get news 
  API_KEY = 'e40d07f00b094602953cc3bf8537477e';
  constructor(private httpClient: HttpClient) { }


  //method that sends a GET request to an endpoint for news
  getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }

}
