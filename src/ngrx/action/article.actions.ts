import {createAction, props} from "@ngrx/store";
import {Article} from "../state/article.state";

export const getArtical = createAction(
  '[Article] Get Article',
  props<{ q: string, from:string,sortBy:string }>()
);

export const getArticalSuccess = createAction(
  '[Article] Get Article Success',
  props<{ articles: Article[] }>()
);

export const getArticalFailure = createAction(

  '[Article] Get Article Failure',
  props<{ error: string }>()
);
