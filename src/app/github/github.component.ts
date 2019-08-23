import { Component, OnInit } from '@angular/core';
import { Github } from '../github';
import { GithubRequestService } from '../github-http/github-request.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  githubs: Github[];

  constructor(public githubRequestService:GithubRequestService) { }

  ngOnInit() {
    this.searchGithub("lion king");
  }

  searchGithub(searchTerm){
  this.githubRequestService.searchGithubs(searchTerm).then(
    ()=>{
      this.githubs=this.githubRequestService.githubs;
    },
    (error)=>{
      console.log(error)
    }
  )
}

}
