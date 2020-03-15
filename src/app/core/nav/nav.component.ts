import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isLoggedIn: boolean;
  names: string;

  constructor(
    private router: Router,
    private usersService: UsersService
  ) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoggedIn = sessionStorage.getItem('authtoken') !== null;
        this.names = sessionStorage.getItem('names');
      }
    });
  }

  logoutHandler() {
    this.usersService.logout().subscribe(
      res => {
        sessionStorage.clear();
        this.router.navigate(['/']);
      }
    );
  }

  ngOnInit() {
  }



}
