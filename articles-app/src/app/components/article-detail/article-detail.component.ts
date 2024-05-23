import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../services/article.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {
  @Input() article!: Article;
  @Output() cancel = new EventEmitter<void>();

  onCancel(): void {
    this.cancel.emit();
  }
}
