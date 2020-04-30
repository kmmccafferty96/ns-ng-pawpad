import { Dog } from './dog.model';
import { Moment } from 'moment';

export interface Boarding {
    id: string;
    userId: string;
    dogs: Dog[];
    startDate: Moment;
    endDate: Moment;
}
