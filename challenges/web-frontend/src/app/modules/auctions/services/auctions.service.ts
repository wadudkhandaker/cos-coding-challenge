import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auctions } from './../models/auctions.interface';
import { environment } from './../../../../environments/environment';
 
@Injectable()
export class AuctionsService {

  constructor(private http: HttpClient) { }

  getBuyerAuctions(): Observable<Auctions> {
    const url = `${environment.baseUrl}/v2/auction/buyer/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<Auctions>(url, {headers});
  }
}
