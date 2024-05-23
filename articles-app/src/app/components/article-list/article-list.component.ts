import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from '../../services/article.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleFormComponent } from '../article-form/article-form.component';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ArticleFormComponent, ArticleDetailComponent, ConfirmDialogComponent],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  selectedArticle: Article | null = null;
  isCreating: boolean = false;
  isEditing: boolean = false;
  isConfirming: boolean = false;
  articleToDelete: Article | null = null;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articles = this.articleService.getArticles();
  }

  selectArticle(article: Article): void {
    this.selectedArticle = article;
    this.isCreating = false;
    this.isEditing = false;
  }

  createArticle(): void {
    this.selectedArticle = { id: 0, title: '', content: '' };
    this.isCreating = true;
    this.isEditing = false;
  }

  editArticle(article: Article): void {
    this.selectedArticle = article;
    this.isCreating = false;
    this.isEditing = true;
  }

  confirmDelete(article: Article): void {
    this.articleToDelete = article;
    this.isConfirming = true;
  }

  deleteArticle(confirmed: boolean): void {
    if (confirmed && this.articleToDelete) {
      this.articleService.deleteArticle(this.articleToDelete.id);
      this.loadArticles();
      this.selectedArticle = null;
    }
    this.isConfirming = false;
    this.articleToDelete = null;
  }

  cancel(): void {
    this.selectedArticle = null;
    this.isCreating = false;
    this.isEditing = false;
  }

  onFormSubmitted(): void {
    this.selectedArticle = null;
    this.isCreating = false;
    this.isEditing = false;
    this.loadArticles();
  }
}
