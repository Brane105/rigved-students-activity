import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Article } from './article';

const ARTICLES = [
	new Article(1, 'Demonology', 'Dantes Inferno'),
	new Article(2, 'Conjuring', 'Edward'),
	new Article(3, 'Pandemonium', 'Divine Comedy')
];
let articlesObservable = of(ARTICLES);

@Injectable()
export class ArticleService {
	getArticles() {
		return articlesObservable;
	}
	getArticle(id: number) {
		return this.getArticles().pipe(
			map(articles => articles.find(article => article.articleId === id))
		);
	}
	updateArticle(article: Article) {
		return this.getArticles().pipe(
			map(articles => {
				let articleObj = articles.find(ob => ob.articleId === article.articleId);
				articleObj = article;
				return articleObj;
			}));
	}
}