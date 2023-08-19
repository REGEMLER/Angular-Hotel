import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/elements/navbar/navbar.component';
import { HeaderComponent } from './components/blocks/header/header.component';
import { FooterComponent } from './components/blocks/footer/footer.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { LangMenuComponent } from './components/elements/lang-menu/lang-menu.component';
import { RoomsComponent } from './components/pages/rooms/rooms.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { OffersComponent } from './components/pages/offers/offers.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { NewsComponent } from './components/pages/news/news.component';
import { ReviewsComponent } from './components/pages/reviews/reviews.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    LangMenuComponent,
    RoomsComponent,
    ServicesComponent,
    OffersComponent,
    GalleryComponent,
    NewsComponent,
    ReviewsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
