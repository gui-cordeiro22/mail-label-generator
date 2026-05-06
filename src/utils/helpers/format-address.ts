export const formatAddressBuilder = (city: string, uf: string) => {
  const formattedAddress = `${city} - ${uf.toUpperCase()}`;

  return formattedAddress;
};
