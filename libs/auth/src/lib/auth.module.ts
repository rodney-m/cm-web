import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ContainerComponent } from './pages/container/container.component';
import { AuthService } from './pages/services/auth.service';

@NgModule({
  imports: [
    CommonModule, 
    AuthRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzLayoutModule,
    NzInputModule,
    NzFormModule,
    NzSelectModule,
    NzModalModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [NzNotificationService, AuthService],
  declarations: [LoginComponent, ForgotPasswordComponent, ContainerComponent]
})
export class AuthModule {}
