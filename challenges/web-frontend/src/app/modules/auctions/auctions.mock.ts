import { Auctions } from './models/auctions.interface';
export const mockAuctions: Auctions = {
    items: [
        {
            associatedVehicle: {
                vehicleImages: [
                    {
                        perspective: 0,
                        url: "https://res.cloudinary.com/castle-tech-gmbh-dev/image/upload/v1639748419/hnmncxi3bhmsjvsg3gzb.jpg"
                    }
                ],
                ez: '02/2020',
                model: 'Clubman One [DE - LimS3 1.6 EU5, 2010 - 2013]',
                mileageInKm: 2020,
                fuelType: 0,
                transmission: 0,
            },
            currentHighestBidValue: 10450,
            remainingTimeInSeconds: 23336
        }
    ],
    page: 1,
    total: 22
}