import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';

import { AppsOauth20Details } from '../entity/AppsOauth20Details';
import { Message } from '../entity/Message';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root'
})
export class AppsOauth20DetailsService extends BaseService<AppsOauth20Details> {
  constructor(private _httpClient: HttpClient) {
    super(_httpClient, '/apps/oauth20');
  }

  init(): Observable<Message<AppsOauth20Details>> {
    return this.getByParams({}, `${this.server.urls.base}/init`);
  }
}