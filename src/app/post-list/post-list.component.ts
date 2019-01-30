import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arrayPosts = [
    {
      name: 'Mon premier post',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu cursus turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      date: new Date(),
      status: '',
      like: 0
    },
    {
      name: 'Mon deuxième post',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu cursus turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      date: new Date(),
      status: '',
      like: 0
    },
    {
      name: 'Encore un post',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu cursus turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      date: new Date(),
      status: '',
      like: 0
    },
  ];
}
