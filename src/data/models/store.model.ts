export interface IStore {
  _id: string;
  name: string;
  address: {
    full: string;
    street: string;
    street2: string;
    city: string;
    state: string;
    zip: string;
  };
  email: string;
  phone: string;
  contactName: string;
  website?: string;
  petLimit: {
    all: boolean;
    limit: number;
  };
  hours: {
    [key: string]: string;
  };
  lat: string;
  lng: string;
  cereatedAt: Date;
  updatedAt: Date;
}
