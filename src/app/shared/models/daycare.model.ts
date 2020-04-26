import { Moment } from 'moment';
import { Dog } from './dog.model';

export interface Daycare {
    userId: string;
    dogs: Dog[];
    startDate: Moment;
    pickupStatus: boolean;
}
