import { Dog } from './dog.interface';
import { Moment } from 'moment';

export interface Daycare {
    userId: string;
    dogs: Dog[];
    startDate: Moment;
}
