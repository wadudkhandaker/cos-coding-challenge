import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionsComponent } from './auctions.component';
import { AuctionsService } from './services/auctions.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { InterceptorModule } from '../../interceptor/httpinterceptor.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormatHourPipe } from './pipes/format-hour.pipe';
import { HighestBidderPipe } from './pipes/highest-bidder.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AuctionsComponent,
    FormatHourPipe,
    HighestBidderPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: "",
          component: AuctionsComponent
        }
      ]
    ),
    MatButtonModule,
    MatCardModule,
    InterceptorModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuctionsService
  ]
})
export class AuctionsModule { }