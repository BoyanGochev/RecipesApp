import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isLoggedIn: boolean;
  names: string;

  constructor(
    private router: Router
  ) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoggedIn = sessionStorage.getItem('authtoken') !== null;
      }
    });
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.names = sessionStorage.getItem('names');
  }



}
