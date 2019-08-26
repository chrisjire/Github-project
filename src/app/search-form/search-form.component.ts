import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { GithubRequestService } from '../github-http/github-request.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  
  searchUsers = true;

  user: User;
  repo: Repo;
  username: string;
  constructor(private github: GithubRequestService) {
  }

  getProfile() {
    this.github.getUsername(this.username);

    this.github.getUser();
    this.user = this.github.user;

    this.github.getRepos(this.username);
    this.repo = this.github.repo;
    console.log(this.repo);
  }

  switchSearch() {
    this.searchUsers = !this.searchUsers;
  }


  ngOnInit() {
    this.github.getUser();
    this.user = this.github.user;

    this.github.getRepos(this.username);
    this.repo = this.github.repo;
  }
}
