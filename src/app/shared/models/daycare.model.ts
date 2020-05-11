import { Dog } from './dog.model';

export interface Daycare {
    id: string;
    userId: string;
    dogs: Dog[];
    startDate: Date;
    pickupStatus: boolean;
}
