import { Moment } from 'moment';
import { Dog } from './dog.model';

export interface Daycare {
    id: string;
    userId: string;
    dogs: Dog[];
    startDate: Moment;
    pickupStatus: boolean;
}
