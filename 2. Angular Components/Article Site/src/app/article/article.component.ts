import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  private symbols: number = 250;
  @Input() article: Article; // from articles.component.html
  @Input() articleDesc: string; // from articles.component.html
  descToShow: string;
  articleDescLen: number; // a counter which controls how many symbols to show
  showReadMoreBtn: boolean = true; // is used inside the *ngIf directive (article.component.html) to determine whether or not to show or hide a button
  showHideBtn: boolean = false; // is used inside the *ngIf directive (article.component.html) to determine whether or not to show or hide a button
  imageIsShown: boolean = false; // is used inside the *ngIf directive (article.component.html) to determine whether or not to show or hide a button
  imageButtonTitle: string = 'Show Image'; // content of the image button is switched between “Show Image” and “Hide Image”

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore(): void {
    this.articleDescLen += this.symbols;

    if (this.articleDescLen >= this.articleDesc.length) {
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle === 'Show Image'
      ? 'Hide Image' : 'Show Image';
  }

  hideDesc(): void {
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
  }

  ngOnInit() {
  }
}