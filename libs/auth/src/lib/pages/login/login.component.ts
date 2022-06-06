import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '@christ-embassy/core';
import { AuthService } from '../services/auth.service';
import { NgxUiLoaderService } from "ngx-ui-loader"; 


@Component({
  selector: 'trogon-energy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username:any;
  isLoadingOne = false;
  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private tokenService : TokenService, 
    private router: Router,
    private uiloader: NgxUiLoaderService) {}

  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submitForm(){

    
  }
}
