import { catchError } from 'rxjs/operators';
import { Iperson } from './detail';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private loc : string = "/assets/JSONData/detail.json";
  constructor(private http : HttpClient) { }
  getData() : Observable<Iperson[]>
  {
    return this.http.get<Iperson[]>(this.loc).pipe(catchError(this.showError));
  }
  showError(errorType : HttpErrorResponse)
  {
    if(errorType.error instanceof ErrorEvent)
    {
      console.error("Client Side error* " , errorType.error.message);
    }
    else
    {
      console.error("Client Side error* " , errorType.error.message);
    }
    return throwError("Please Try After Some Time , We are improving this type of issues");
  }
}
