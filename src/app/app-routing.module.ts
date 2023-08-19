import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { NewsComponent } from './components/pages/news/news.component';
import { OffersComponent } from './components/pages/offers/offers.component';
import { ReviewsComponent } from './components/pages/reviews/reviews.component';
import { RoomsComponent } from './components/pages/rooms/rooms.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'news', component: NewsComponent},
  { path: 'offers', component: OffersComponent},
  { path: 'reviews', component: ReviewsComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
