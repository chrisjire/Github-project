import { NgModule } from '@angular/core';
import {GithubComponent} from './github/github.component';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {"path":"home","component":GithubComponent},
  {"pathMatch":"full","redirectTo":"home","path":"" },
  {"path":"**","component":NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
