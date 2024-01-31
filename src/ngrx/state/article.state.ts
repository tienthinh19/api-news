export interface Article{
  source : {
    id: string;
    name: string;
  },
  author:string;
  title:string;
  description:string;
  url:string;
  urlToImage:string;
  publishedAt:Date;
  content:string;
}

export  interface ArticleState{
  articles: Article[],
  loading: boolean,
  error: string,
}
