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
    ReactiveFormsModule
  ],
  providers: [NzNotificationService]
})
export class AuthModule {}
