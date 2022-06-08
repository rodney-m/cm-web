import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultService } from '@christ-embassy/core';
import { ApplicationApis } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends DefaultService<any> {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${ApplicationApis.EventsService}`)
  }
}
