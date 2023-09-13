export interface Reservation {
    customId?: string;
    startDate?: Date | any;
    endDate?: Date | any;
    carNumber?: number;
    userId?: string;
    startPlace?: string;
    endPlace?: string;
    price?: number;
}