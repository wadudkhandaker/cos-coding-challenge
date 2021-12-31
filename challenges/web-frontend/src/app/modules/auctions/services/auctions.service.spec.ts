import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuctionsService } from './auctions.service';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';
import { environment } from  './../../../../environments/environment';
import { Auctions } from  './../models/auctions.interface';
import { mockAuctions } from  './../auctions.mock';

describe('AuctionsService', () => {
  let httpClient: HttpClient;
  let auctionService: AuctionsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [AuctionsService]
    });

    httpClient = TestBed.inject(HttpClient);
    auctionService = TestBed.inject(AuctionsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(auctionService).toBeTruthy();
  });

  describe('Auctions', () => {
    it('should get data all running auctions', () => {
      auctionService.getBuyerAuctions().subscribe((res: Auctions) => {
          expect(res.items[0].associatedVehicle.model).toEqual('Clubman One [DE - LimS3 1.6 EU5, 2010 - 2013]');
          expect(res.items[0].associatedVehicle.ez).toEqual('02/2020');
          expect(res.items[0].associatedVehicle.mileageInKm).toEqual(2020);
          expect(res.items[0].associatedVehicle.fuelType).toEqual(0);
          expect(res.items[0].associatedVehicle.transmission).toEqual(0);
          expect(res.items[0].currentHighestBidValue).toEqual(10450);
          expect(res.items[0].remainingTimeInSeconds).toEqual(23336);
          expect(res.page).toEqual(1);
          expect(res.total).toEqual(22)
      });
      const req = httpMock.expectOne(`${environment.baseUrl}/v2/auction/buyer/`);
      expect(req.request.method).toBe('GET');
      req.flush(mockAuctions);
    });
  });

});
