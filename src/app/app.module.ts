import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app-routing.module';
import { HackerNewsApiService } from './hackernews-api.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { CommentTreeComponent } from './comment-tree/comment-tree.component';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    UserComponent,
    ItemCommentsComponent,
    CommentTreeComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HackerNewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
