import { Moment } from 'moment';
import { Dog } from './dog.interface';

export interface Daycare {
    userId: string;
    dogs: Dog[];
    startDate: Moment;
    pickupStatus: boolean;
}
