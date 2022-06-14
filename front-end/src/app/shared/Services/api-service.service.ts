import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public _baseurl='http://localhost:8000';
  constructor() { }
}
