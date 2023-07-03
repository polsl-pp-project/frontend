export interface Reservation {
    customId?: string;
    startDate?: Date;
    endDate?: Date;
    carNumber?: number;
    userId?: string;
    startPlace?: string;
    endPlace?: string;
    price?: number;
}