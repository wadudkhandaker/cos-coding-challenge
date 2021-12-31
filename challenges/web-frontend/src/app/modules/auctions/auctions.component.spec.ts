import { TestBed } from '@angular/core/testing';
import { AuctionsComponent } from './auctions.component';
import { AuthService } from './../../services/auth.service';
import { AuctionsService } from './services/auctions.service';
import { HttpClientTestingModule } from  '@angular/common/http/testing';
import { FormatHourPipe } from './pipes/format-hour.pipe';
import { HighestBidderPipe } from './pipes/highest-bidder.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('AuctionsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AuctionsComponent,
        FormatHourPipe,
        HighestBidderPipe,
        MatProgressSpinnerModule
      ],
      imports: [HttpClientTestingModule, MatCardModule],
      providers: [
        AuthService,
        AuctionsService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AuctionsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});