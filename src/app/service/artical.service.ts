import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor( private http: HttpClient) { }

  getArticalList(q:string,from:string,sortBy:string){
    console.log('https://newsapi.org/v2/everything?q='+q+'&from='+from+'&sortBy='+sortBy+'&apiKey='+environment.apiKey);
    return  this.http.get('https://newsapi.org/v2/everything?q='+q+'&from='+from+'&sortBy='+sortBy+'&apiKey='+environment.apiKey);

  }




}
