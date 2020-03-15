import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

function passwordsMatch(c: AbstractControl) {
  return c.value.password === c.value.rePassword ? null : { passwordsMatch: true };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router

  ) {
    this.registerForm = fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      passwords: fb.group({
        password: ['', [Validators.required]],
        rePassword: ['', [Validators.required]]
      }, { validators: [passwordsMatch] })
    });
  }

  registerHandler(data) {
    this.userService.register(data).subscribe(
      res => {
        this.userService.setUserAuth(res);
        this.router.navigate(['/']);

      }
    );
  }

  ngOnInit() {
  }

}
