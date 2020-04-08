import { Dog } from './dog.interface';
import { Moment } from 'moment';

export interface Boarding {
    userId: string;
    dogs: Dog[];
    startDate: Moment;
    endDate: Moment;
}
