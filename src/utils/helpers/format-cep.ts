export const formattedCepBuilder = (cep: string) =>
  cep.replace(/\D/g, "").replace(/^(\d{5})(\d{3})$/, "$1-$2");
