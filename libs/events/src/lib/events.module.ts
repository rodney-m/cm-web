import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventsFormComponent } from './components/events-form/events-form.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { EventsRoutingModule } from './events.routing.module';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { AngularFileUploaderModule } from "angular-file-uploader";

@NgModule({
  imports: [
    EventsRoutingModule,
    CommonModule,
    NzNotificationModule,
    NzTableModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    AngularFileUploaderModule
  ],
  declarations: [EventsListComponent, EventsFormComponent],
})
export class EventsModule {}
