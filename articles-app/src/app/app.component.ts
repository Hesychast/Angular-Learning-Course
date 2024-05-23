import { Component } from '@angular/core';
import { ArticleListComponent } from './components/article-list/article-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ArticleListComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Final App of the Angular Base Course';
}
