export interface Reservation {
    customId?: string | undefined;
    startDate?: Date | any;
    endDate?: Date | any;
    carNumber?: number;
    userId?: string;
    startPlace?: string;
    endPlace?: string;
    price?: number;
    _id: string;
}