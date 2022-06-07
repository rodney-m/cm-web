import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '@christ-embassy/core';
import { AuthService } from '../services/auth.service';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { UsermanagementService } from '../../services/usermanagement.service';


@Component({
  selector: 'trogon-energy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username:any;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private service: UsermanagementService,
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

    this.isLoading = true
    this.service.postToUrl('/Account/login', this.loginForm.value).subscribe({
      next:(res:any) => {
        console.log(res)
        this.tokenService.setToken(res.data.token)
      },
      error:(err:any) => {
        console.log(err)
        this.isLoading = false;
      },
      complete:() => {
        this.isLoading = false
        this.router.navigateByUrl('/')
        console.log("done")
      },
    })
  }
}
