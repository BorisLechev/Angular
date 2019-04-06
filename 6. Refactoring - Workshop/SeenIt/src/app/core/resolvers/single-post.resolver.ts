import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { PostInfo } from 'src/app/components/shared/model/IPost-Info';
import { PostService } from '../services/post.service';

@Injectable({ // да инжектираме services и слага в app.routing resolve на details
    providedIn: 'root'
})
export class SinglePostResolver implements Resolve<PostInfo>{ // ctrl + click върху Resolve
    constructor(private postService: PostService) { } // за да върна данните и поста

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id']; //за да взема post по id ми трябва id от snapshot

        return this.postService.getById(id);
    }
}