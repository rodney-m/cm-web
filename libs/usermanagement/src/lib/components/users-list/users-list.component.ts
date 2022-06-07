import { Component, OnInit } from '@angular/core';
import { UsermanagementService } from '@christ-embassy/auth';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UsersFormComponent } from '../users-form/users-form.component';


@Component({
  selector: 'christ-embassy-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  constructor(private modalService: NzModalService,
    private usermanagementService: UsermanagementService,
    private notification: NzNotificationService
    ) {}

  ngOnInit(): void {}

  openModal(){
    this.modalService.create({
      nzTitle: 'Add User',
      nzContent: UsersFormComponent,
      nzOnCancel: ()=> {
        console.log("canceled")
      },
      nzOnOk: (comp) => {
        console.log(comp.form.value)
        this.addUser(comp.form.value)
      },

    })
  }


  addUser(user:any){
    this.usermanagementService.postToUrl('/Account/create-account', user).subscribe({
      next: (res) => {
        console.log(res)
        if(res.success){
          this.notification.success('Success', res.messages[0])
        } else{
          this.notification.error('Success', res.messages[0])
        }
      },
      error: (err) => {
        console.log(err)
        this.notification.error('Error Occured', 'Error Occurred')
      },
      complete: () => {
      }
    })
  }
}
