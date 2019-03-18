import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit() {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyDiJr5cj7PBkNulsKkk4MYTq_PKTsS1GgA',
    authDomain: 'nodeangular-f9c99.firebaseapp.com',
    databaseURL: 'https://nodeangular-f9c99.firebaseio.com',
    projectId: 'nodeangular-f9c99',
    storageBucket: 'nodeangular-f9c99.appspot.com',
    messagingSenderId: '362345468816'
  };
  firebase.initializeApp(config);

  } //oninit
}
