import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, IAPIResponse, IPagedResponse, LoggedEntry } from '../common';
import { Observable } from 'rxjs';
import { EndPoints } from '../EndPoints';

@Injectable({
  providedIn: 'root',
})
export class loggedEntriesService {
  // ***************** Variables ***************** //
  employees!: IPagedResponse<LoggedEntry[]>;
  // ***************** Constructor ***************** //
  constructor(private http: HttpClient) {}

  // ***************** Functions ***************** //
  getloggedEntries( Service: string | null,
    Level: string | null,
    From: Date | null,
    To: Date | null,
     page: number , 
    pageSize: number  ): Observable<IAPIResponse< IPagedResponse<LoggedEntry[]>>> {
     return this.http.get<IAPIResponse< IPagedResponse<LoggedEntry[]>>>(EndPoints.LoggedEntriesListEndpoint(Service,Level,From,To,page,pageSize))
    }

  getloggedEntry(id: number): Observable<any> {
    return this.http.get<LoggedEntry>(EndPoints.LoggedEntryByIdEndpoint(id));
  }

}
