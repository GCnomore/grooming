import IPet from "./pet.model";

export default interface ICustomer {
  firstName: string;
  lastName: string;
  streetAddr: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  preferredContactMethod: string;
  pet: IPet[];
}
