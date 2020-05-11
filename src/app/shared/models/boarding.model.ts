import { Dog } from './dog.model';

export interface Boarding {
    id: string;
    userId: string;
    dogs: Dog[];
    startDate: Date;
    endDate: Date;
}
