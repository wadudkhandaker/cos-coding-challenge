import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuctionsService } from './services/auctions.service';
import { AuthService } from './../../services/auth.service';
import { Subscription } from 'rxjs';
import { Auctions, Items } from './models/auctions.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpError } from 'src/app/interfaces/http-error.interface';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss']
})
export class AuctionsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription;
  auctions!: Auctions;
  isLoading!: boolean;
  unAuthorizedMsg!: string;

  constructor(private auctionsService: AuctionsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.auctionsService?.getBuyerAuctions().pipe().subscribe((res: Auctions)=> {
      this.isLoading = false;
      this.auctions = res;
    },
    (errorResponse: HttpErrorResponse) => {
      this.isLoading = false;
      this.unAuthorizedMsg = (errorResponse?.error as HttpError)?.message as string;       
    });
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

}

