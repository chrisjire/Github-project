import { Component, OnInit } from '@angular/core';
import { Github } from '../github';
import { GithubRequestService } from '../github-http/github-request.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

  

}
