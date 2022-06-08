import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from '../../services/events.service';


@Component({
  selector: 'christ-embassy-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss'],
})
export class EventsFormComponent implements OnInit {
  form!: FormGroup;
  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};
  constructor(private eventsService: EventsService, private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.innitializeForm()
  }

  innitializeForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      eventDate: ['', [Validators.required, Validators.email]],
    })

  }

  submitForm(){
    console.log(this.form.value)
  }
}
