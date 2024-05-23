import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article, ArticleService } from '../../services/article.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  title = "Add or edit article";
  @Input() article!: Article;
  @Output() formSubmitted = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void { }

  onSubmit(userForm: NgForm): void {
    const frmValue = userForm.form.value;
    
    if (this.article.id) {
      const newArticle: Article = {id: this.article.id, title: frmValue.title, content: frmValue.content}
      this.articleService.updateArticle(newArticle);
    } else {
      const newArticle: Article = {id: Date.now(), title: frmValue.title, content: frmValue.content}
      this.articleService.addArticle(newArticle);
    }
    this.formSubmitted.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
