import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ObservableInput, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  protected abstract errorHandler(error: any, source: Observable<any>);

  constructor() { }
}
