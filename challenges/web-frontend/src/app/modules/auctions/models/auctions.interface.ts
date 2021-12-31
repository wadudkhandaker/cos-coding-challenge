export interface Auctions {
  items: Items[];
  page?: number;
  total?: number;
}

export interface Items {
  amIRegularBuyer?: boolean;
  associatedVehicle: AssociatedVehicle;
  currentHighestBidValue: number;
  currentHighestBidValueNet?: number;
  highestBidValueAtEndingTimeNet?: string;
  hotBid?: boolean;
  id?: number;
  label?: string;
  locationAddress?: string;
  locationCity?: string;
  locationCountryCode?: string;
  locationZip?: string;
  minimumRequiredAsk?: number;
  minimumRequiredAskNet?: number;
  numBids?: number;
  remainingDaysUntilLatePickup?: string;
  remainingDaysUntilReauctioning?: string;
  remainingTimeForInstantPurchaseInSeconds?: string;
  remainingTimeInSeconds?: number;
  startingBidValue?: number;
  startingBidValueNet?: number;
}

export interface AssociatedVehicle {
  id?: number;
  ez: string;
  make?: string;
  mileageInKm?: number;
  model: string;
  vehicleImages: VehicleImages[];
  fuelType: number;
  transmission: number;
}

interface VehicleImages {
  perspective?: number;
  url: string;
}
