import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  loginHandler(data) {
    this.usersService.login(data).subscribe(
      userInfo => {
        this.usersService.setUserAuth(userInfo);
        this.router.navigate(['/']);
      }
    );
  }

  ngOnInit() {
  }

}
