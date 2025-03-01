import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeedComponent} from "./feed/feed.component";
import {CartComponent} from "./cart/cart.component";
import {HomeComponent} from "./home/home.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'feed'},
  {path: 'feed', component:FeedComponent},
  {path: 'home', component:HomeComponent},
  {path: '404', component:HomeComponent},
  {path: 'cart', component:CartComponent},
  {path: 'posts', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
