import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-favorite-color',
  styleUrls: ['./favorite-color.component.css'],
  templateUrl: './favorite-color.component.html',
})
export class FavoriteColorComponent implements OnInit {
  favoriteColor = '';

  hero = {
    name: 'Lara',
  };

  ngOnInit(): void {
    this.favoriteColor = 'Red';
  }
}
