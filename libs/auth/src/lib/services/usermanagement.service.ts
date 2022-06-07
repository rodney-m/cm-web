import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {  DefaultService } from '@christ-embassy/core';
import { ApplicationApis } from '@env/environment';


@Injectable({
  providedIn: 'root'
})
export class UsermanagementService extends DefaultService<any> {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${ApplicationApis.UserManagement}`)
  }
}
