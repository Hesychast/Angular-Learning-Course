import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article, ArticleService } from '../../services/article.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  @Input() article!: Article;
  @Output() formSubmitted = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.article.id) {
      this.articleService.updateArticle(this.article);
    } else {
      this.article.id = Date.now();
      this.articleService.addArticle(this.article);
    }
    this.formSubmitted.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
