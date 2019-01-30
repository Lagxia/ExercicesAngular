import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postName: string;
  @Input() postText: string;
  @Input() postDate: string;
  @Input() postLike: number;
  @Input() postStatus: string;

  constructor() { }

  ngOnInit() {
  }

  // Retourne la couleur du titre en fonction du nombre de like
  getColor(){
    return this.postStatus;
  }

  // Ajoute 1 aux nombres de like
  onLoveIt() {
    this.postLike++;
    this.checkStatus();
  }

  // Retire 1 aux nombres de like
  onDontLoveIt() {
    this.postLike--;
    this.checkStatus();
  }

  // Retourne la couleur en fonction du nombre de like '' = blanc / Like = vert / DontLike = rouge
  checkStatus() {
    if(this.postLike === 0){
      this.postStatus = '';
    } else if(this.postLike >= 0){
      this.postStatus = 'green';
    } else {
      this.postStatus = 'red';
    }
  }
}
