import { Component, OnInit } from '@angular/core';
import { Github } from '../github';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  githubs: Github

  constructor() { }

  ngOnInit() {
  }

}
