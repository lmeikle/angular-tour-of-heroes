import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { GuestCardComponent } from './dynamic-componets/guest-card/guest-card.component';
import { UserCardComponent } from './dynamic-componets/user-card/user-card.component';
import { ProfileHostDirective } from './profile-host.directive';
import { ProfileComponent } from './dynamic-componets/profile/profile.component';
import { NgContentExampleComponent } from './content-container-template/ng-content-example/ng-content-example.component';
import { ErrorCardComponent } from './content-container-template/ng-content-example/error-card/error-card.component';
import { NgTemplateExampleComponent } from './content-container-template/ng-template-example/ng-template-example.component';
import { ErrorCardWithTemplateComponent } from './content-container-template/ng-template-example/error-card-with-template/error-card-with-template.component';
import { RxjsPlaygroundComponent } from './rxjs-playground/rxjs-playground.component';
import { FavoriteColorComponent } from './forms/reactive/favorite-color/favorite-color.component';
import { FavoriteColorComponent as TemplateDrivenFavoriteColorComponent } from './forms/template-driven/favorite-color/favorite-color.component';
import { FormsComponent } from './forms/forms/forms.component';
import { HeroFormComponent } from './forms/template-driven/hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    GuestCardComponent,
    UserCardComponent,
    ProfileHostDirective,
    ProfileComponent,
    NgContentExampleComponent,
    ErrorCardComponent,
    NgTemplateExampleComponent,
    ErrorCardWithTemplateComponent,
    RxjsPlaygroundComponent,
    FavoriteColorComponent,
    TemplateDrivenFavoriteColorComponent,
    FormsComponent,
    HeroFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
