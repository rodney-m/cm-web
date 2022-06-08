import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { EventsService } from '../../services/events.service';
import { EventsFormComponent } from '../events-form/events-form.component';

@Component({
  selector: 'christ-embassy-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  eventsList :any[]=[]
  constructor(private eventsService:EventsService, private notification: NzNotificationService, private modal: NzModalService) {}

  ngOnInit(): void {
    this.getAllEvents()
  }

  getAllEvents(){
    this.eventsService.getFromUrl('/Events').subscribe({
      next: (res) => {
        this.eventsList = res.data;
      },
      error: (err) => {
        this.notification.error('Error Occured', err.messages[0])
      }
    })
  }

  openModal(){
    this.modal.create({
      nzTitle: 'Add User',
      nzContent: EventsFormComponent,
      nzOnCancel: ()=> {
        console.log("canceled")
      },
      nzOnOk: (comp) => {
        console.log(comp.form.value)
        this.addEvent(comp.form.value)
      },

    })
  }

  addEvent(value:any){
    console.log(value)
  }

  showDeleteConfirm(id: any): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this Event?',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK', id),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
}
