import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuctionsService } from './services/auctions.service';
import { AuthService } from './../../services/auth.service';
import { Subscription } from 'rxjs';
import { Auctions, Items } from './models/auctions.interface';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss']
})
export class AuctionsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription;
  auctions!: Auctions;
  isLoading!: boolean;

  constructor(private auctionsService: AuctionsService, private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.auctionsService?.getBuyerAuctions().pipe().subscribe((res: Auctions)=> {
      this.isLoading = false;
      this.auctions = res;
    });
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

}

