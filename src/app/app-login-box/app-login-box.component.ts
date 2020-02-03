import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-box',
  templateUrl: './app-login-box.component.html',
  styleUrls: ['./app-login-box.component.css']
})
export class AppLoginBoxComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private service:AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }

  signIn() {
    this.service.login(this.f.username.value, this.f.password.value).subscribe(result => {

    })
  }
}
