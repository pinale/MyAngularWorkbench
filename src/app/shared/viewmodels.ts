export interface IPayload {
    rows: number;
    kb?: number;
    time?: number;
}

export class Geo {
    lat:        number;
    lng:        number;
}

export class Address {
    city:       string;
    geo:        Geo;
    street:     string;
    suite:      string;
    zipcode:    string;
}

export class Company {
    bs:             string;
    catchPhrase:    string;
    name:           string;
}

export class User {
    address?: Address;
    company?: Company;
    email: string;
    id: number;
    name: string;
    phone: string;
    username?: string;
    website?: string;
}