import { NgModule } from '@angular/core';
import {GithubComponent} from './github/github.component';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import { SearchFormComponent } from './search-form/search-form.component';


const routes: Routes = [
  {path: '', component: GithubComponent},
  {path: 'search', component: SearchFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
