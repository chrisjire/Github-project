import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { NavComponent } from './nav/nav.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubRequestService } from './github-http/github-request.service';
import { UserDirective } from './user.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    NavComponent,
    SearchFormComponent,
    NotFoundComponent,
    UserDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [GithubRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
