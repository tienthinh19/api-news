import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {articalReducer} from "../ngrx/reduce/article.reduce";
import {ArticleEffects} from "../ngrx/effect/article.effects";
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(
    {
      article: articalReducer
    }

  ),
    provideEffects(
      [
        // ArticleEffects
        ArticleEffects
      ]
    ),
    provideHttpClient()


  ]
};
