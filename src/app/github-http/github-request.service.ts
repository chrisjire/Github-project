import { Injectable } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import {HttpClient} from'@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  user: User;
  repo: Repo;
  private userName: string;

  apiKey: string = "7a749e699fef6e1d9dc664360d234d310ad384e6";
  baserUrl: string = 'https://api.github.com/users/';
  constructor(private http: HttpClient) {
    this.user = new User ('', '', '', '', 0, 0, 0);
    this.repo = new Repo('', '', '');
    this.userName = 'chrisjire';
  }

  getUser() {

    interface ApiResponse {
      login: string;
      avatar_url: string;
      html_url: string;
      name: string;
      public_repos: number;
      followers: number;
      following: number;
    }
    const promise = new Promise(((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '?access_token=' + this.apiKey )
      .toPromise()
      .then(res => {
          this.user.login = res.login;
          this.user.avatar_url = res.avatar_url;
          this.user.html_url = res.html_url;
          this.user.name = res.name;
          this.user.followers = res.followers;
          this.user.following = res.following;
          this.user.public_repos = res.public_repos;
        },
        error => {

      reject(error);
    });
    }));
    return promise;
  }

  getRepos(username) {

    interface ApiResponse {
      name: string;
      html_url: string;
      description: string;
    }

    const promise = new Promise(((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '/repos?access_token=' + this.apiKey )
        .toPromise()
        .then(res => {
          this.repo = res;
    }, error => {

      reject(error);
    });
  }));
    return promise;
  }

  getUsername(username: string) {
    this.userName = username;
  }
}
