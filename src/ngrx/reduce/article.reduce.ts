import {createReducer, on} from "@ngrx/store";
import {getArtical, getArticalFailure, getArticalSuccess} from "../action/article.actions";
import {Article, ArticleState} from "../state/article.state";

export const initializState: ArticleState = {
  articles: [],
  error: '',
  loading: false
};
export const articalReducer = createReducer(
  initializState,
  on(getArtical, state => ({...state, loading: true})),
  on(getArticalSuccess, (state, {articles}) => ({...state, articles: articles, loading: false})),
  on(getArticalFailure, (state, {error}) => ({...state, error: error, loading: false}))
);
