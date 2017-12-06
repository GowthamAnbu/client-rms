import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private hide: Boolean = true;
  private loginForm: FormGroup;
  private email: FormControl;
  private password: FormControl;

  constructor() { }

  ngOnInit() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]
      );
      this.password = new FormControl('', [
        Validators.required
      ]);
      this.loginForm = new FormGroup({
        email: this.email,
        password: this.password
      });
  }

}
