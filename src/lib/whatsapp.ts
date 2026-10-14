import { business, services } from "./data";
export type Quote = {
  name: string;
  service: string;
  quantity: string;
  description: string;
  organization: string;
  preference: string;
};
export function validateQuote(q: Quote) {
  const errors: Partial<Record<keyof Quote, string>> = {};
  if (q.name.trim().length < 2)
    errors.name = "Informe seu nome com pelo menos 2 caracteres.";
  if (!services.some((s) => s.title === q.service))
    errors.service = "Selecione um serviço.";
  if (
    !/^\d+$/.test(q.quantity) ||
    Number(q.quantity) < 1 ||
    !Number.isSafeInteger(Number(q.quantity))
  )
    errors.quantity = "Informe uma quantidade inteira maior que zero.";
  if (q.description.trim().length < 10)
    errors.description =
      "Descreva sua solicitação com pelo menos 10 caracteres.";
  return errors;
}
export function quoteMessage(q: Quote) {
  const details = [
    `Nome: ${q.name.trim()}`,
    `Serviço: ${q.service}`,
    `Quantidade aproximada: ${q.quantity}`,
  ];
  if (q.organization.trim())
    details.push(`Escola ou empresa: ${q.organization.trim()}`);
  details.push(`Preferência de contato: ${q.preference || "WhatsApp"}`);
  return `Olá, Nice! Gostaria de solicitar um orçamento.\n\n${details.join("\n")}\n\nSolicitação: ${q.description.trim()}`;
}
export function whatsappUrl(message: string) {
  return `${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
