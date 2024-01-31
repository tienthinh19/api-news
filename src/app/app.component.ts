import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {Article} from "../ngrx/state/article.state";
import {ArticleState} from "../ngrx/state/article.state";
import {AsyncPipe} from "@angular/common";
import {getArtical} from "../ngrx/action/article.actions";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'untitled';
$loading = this.store.select(state => state.article.loading);
$articles = this.store.select(state => state.article.articles);
$error = this.store.select(state => state.article.error);

  constructor(private store:Store<{ article: ArticleState }>) {
    this.store.dispatch(getArtical({q:'tesla',from:'2023-12-31',sortBy:'publishedAt'}));
  }

}
