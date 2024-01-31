import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs";
import {ArticleService} from "../../app/service/artical.service";
import * as ActicleActions from "../action/article.actions";
import * as ArticleReducer from "../reduce/article.reduce";
import {Article} from "../state/article.state";

@Injectable()
export class ArticleEffects {
  constructor(private actions$: Actions, private articleService: ArticleService) {
  }

  article$ = createEffect(() => this.actions$.pipe(
    ofType(ActicleActions.getArtical),
    switchMap((action) => this.articleService.getArticalList(action.q, action.from, action.sortBy).pipe(
      map((articles: any) => ActicleActions.getArticalSuccess({articles: articles.articles as Article[]})),
      catchError(error => [ActicleActions.getArticalFailure({error})])
    ))));
}
