import { Pipe, PipeTransform } from '@angular/core';
import { Items } from './../models/auctions.interface';
@Pipe({
  name: 'highestBidder'
})
export class HighestBidderPipe implements PipeTransform {

  transform(item: Items, auctions: Items[]): string {
    return this.getHighestBidder(item, auctions);
  }

  getHighestBidder(item: Items, auctions: Items[]): string {
    const maxBidItem: Items = auctions?.reduce((p: Items, c: Items) => p?.currentHighestBidValue > c?.currentHighestBidValue ? p : c);
    if(maxBidItem?.currentHighestBidValue === item?.currentHighestBidValue) {
      return '<span class="highest-chip"> Highest</span>';
    } else {
      return '';
    }
  }

}
