import { describe, it, expect } from "vitest";
import {
  validateQuote,
  quoteMessage,
  whatsappUrl,
  type Quote,
} from "../src/lib/whatsapp";
import { business, navigation, services } from "../src/lib/data";
const quote: Quote = {
  name: " Ana ",
  service: services[0].title,
  quantity: "12",
  description: "Uniformes para a escola & ajustes.",
  organization: "Escola São João",
  preference: "WhatsApp",
};
describe("Solicitação de orçamento", () => {
  it("aceita solicitação válida", () =>
    expect(validateQuote(quote)).toEqual({}));
  it("rejeita campos obrigatórios vazios", () =>
    expect(
      Object.keys(
        validateQuote({
          ...quote,
          name: " ",
          service: "",
          quantity: "",
          description: "",
        }),
      ),
    ).toEqual(["name", "service", "quantity", "description"]));
  it.each(["0", "-1", "1.5", "abc", "9007199254740992"])(
    "rejeita quantidade %s",
    (quantity) =>
      expect(validateQuote({ ...quote, quantity }).quantity).toBeDefined(),
  );
  it("rejeita categorias desconhecidas", () =>
    expect(
      validateQuote({ ...quote, service: "Bordado" }).service,
    ).toBeDefined());
  it("formata dados e remove espaços externos", () => {
    const message = quoteMessage(quote);
    expect(message).toContain("Nome: Ana\nServiço: Uniformes escolares");
    expect(message).toContain("Escola ou empresa: Escola São João");
    expect(message).toContain("Quantidade aproximada: 12");
    expect(message).toContain(quote.description);
  });
  it("omite organização quando opcional vazia", () =>
    expect(quoteMessage({ ...quote, organization: "" })).not.toContain(
      "Escola ou empresa:",
    ));
  it("codifica caracteres especiais sem alterar a mensagem", () => {
    const url = new URL(whatsappUrl(quoteMessage(quote)));
    expect(url.origin + url.pathname).toBe(business.whatsapp);
    expect(url.searchParams.get("text")).toBe(quoteMessage(quote));
  });
  it("mantém links e serviços esperados", () => {
    expect(navigation.map((n) => n.href)).toEqual([
      "/",
      "/servicos/",
      "/sobre/",
      "/galeria/",
      "/contato/",
    ]);
    expect(services).toHaveLength(4);
    expect(business.tel).toBe("tel:+5511996227091");
    expect(new URL(business.maps).searchParams.get("query")).toContain(
      "Rua João Paulo, 141",
    );
  });
});
