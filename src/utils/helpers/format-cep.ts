export const formattedCepBuilder = (cep: string) => {
  const formattedCep = cep
    .replace(/\D/g, "")
    .replace(/^(\d{5})(\d{3})$/, "$1-$2");

  return formattedCep;
};
