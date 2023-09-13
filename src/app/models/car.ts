export interface Car {
    _id?: number;
    carBrand?: String; //marka
    price?: Number | any; //cena za miesiac wynajmu
    year?: Number; //rocznik
    mileage?: Number; //przebieg
    body?: String; //rodzaj nadwozia
    fuelType?: String; //rodzaj paliwa
    transmission?: String; //skrzynia biegow
    doors?: Number; //ilosc drzwi
    color?: String; //kolor
    drive?: String;//naped
    power?: Number; //il koni mechanicznych
    engineCapacity?: Number; //pojemnosc silnika
    trunkCapacity?: Number; //pojemnosc bagaznika
    fuelConsumption?: Number; //spalanie
    number?: number | undefined;
    description?: String;//krotki opis
    car_image?: String;
    rentalprice?: any;

}