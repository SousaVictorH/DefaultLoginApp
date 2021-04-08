import { AddressModel } from './address';

const User = ({
  id,
  name,
  genre,
  dateOfBirth,
  email,
  password,
  phone,
  zipCode,
  city,
  uf,
  street,
  district,
  number,
  complement,
}) => {
  return {
    id,
    name, //String
    genre, //String
    dateOfBirth: new Date(dateOfBirth), //Date
    email, //String
    password, //String
    phone, //String
    address: AddressModel({
      zipCode,
      city,
      uf,
      street,
      district,
      number,
      complement,
    }), //Address
  };
};

module.exports = User;
