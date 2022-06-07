import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsermanagementService } from '@christ-embassy/auth';

@Component({
  selector: 'christ-embassy-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  form!: FormGroup;
  roles : any[] = []
  constructor(private formBuilder: FormBuilder, private userManagementService: UsermanagementService) {

    this.getRoles()
  }

  ngOnInit(): void {
    this.innitializeForm()
    // this.getRoles();
  }

  innitializeForm() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      roleId: [0, Validators.required]
    })

  }

  getRoles(){
    this.userManagementService.get('Roles').subscribe({
      next: (res) => {
        this.roles = res.data
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {console.log("complete")}
    })
  }

  submitForm(){
    console.log(this.form.value)
  }
}
