// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// It is not working because to access value in an object, you cannot access it by index like in arrays
// Instead, you should call its key
// In this case, the key for house number is houseNumber
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);