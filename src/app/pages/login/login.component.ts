import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string;
  password: string;

  public LoginForm: FormGroup;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() : void {
    this.LoginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    })
  }

  ngOnDestroy() : void {
  }

}
