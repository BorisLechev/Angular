import ArticleModel from '../models/article.model';
import Data from './seed';

export class ArticleData {
    getData(): Array<ArticleModel> {
        const articles: Array<ArticleModel> = [];

        Data.forEach(currentArticle => {
            currentArticle = new ArticleModel(
                currentArticle.title,
                currentArticle.description,
                currentArticle.author,
                currentArticle.imageUrl
            );

            articles.push(currentArticle);
        });

        return articles;
    }
}