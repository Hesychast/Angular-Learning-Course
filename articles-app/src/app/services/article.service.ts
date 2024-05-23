import { Injectable } from '@angular/core';

export interface Article {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private storageKey = 'articles';

  constructor() { }

  getArticles(): Article[] {
    const articles = localStorage.getItem(this.storageKey);
    return articles ? JSON.parse(articles) : [];
  }

  getArticleById(id: number): Article | undefined {
    const articles = this.getArticles();
    return articles.find(article => article.id === id);
  }

  addArticle(article: Article): void {
    const articles = this.getArticles();
    articles.push(article);
    localStorage.setItem(this.storageKey, JSON.stringify(articles));
  }

  updateArticle(updatedArticle: Article): void {
    let articles = this.getArticles();
    articles = articles.map(article => article.id === updatedArticle.id ? updatedArticle : article);
    localStorage.setItem(this.storageKey, JSON.stringify(articles));
  }

  deleteArticle(id: number): void {
    let articles = this.getArticles();
    articles = articles.filter(article => article.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(articles));
  }
}
