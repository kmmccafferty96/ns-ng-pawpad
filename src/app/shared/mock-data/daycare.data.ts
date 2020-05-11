import { Daycare } from '../models/daycare.model';

export const daycares: Daycare[] = [
    {
        id: '1',
        userId: '1',
        dogs: [
            {
                id: '',
                name: 'Bailey',
                imageUrl:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/funny-dog-captions-1563456605.jpg?crop=0.747xw:1.00xh;0.0459xw,0&resize=480:*',
            },
            {
                id: '',
                name: 'Berkeley',
                imageUrl:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-laying-on-grass-high-res-stock-photography-1574096636.jpg?crop=0.722xw:1.00xh;0.140xw,0&resize=640:*',
            },
        ],
        startDate: new Date('Sun Mar 29 2020'),
        pickupStatus: false,
    },
];
