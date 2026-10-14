"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { services } from "@/lib/data";
import {
  type Quote,
  validateQuote,
  quoteMessage,
  whatsappUrl,
} from "@/lib/whatsapp";
export function QuoteForm() {
  const [errors, setErrors] = useState<Partial<Record<keyof Quote, string>>>(
    {},
  );
  const [ready, setReady] = useState(false);
  return (
    <form
      className="quote-form"
      noValidate
      onChange={() => setReady(false)}
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const quote = Object.fromEntries(
          [
            "name",
            "service",
            "quantity",
            "description",
            "organization",
            "preference",
          ].map((k) => [k, String(data.get(k) || "")]),
        ) as Quote;
        const found = validateQuote(quote);
        setErrors(found);
        if (Object.keys(found).length) {
          e.currentTarget
            .querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)
            ?.focus();
          return;
        }
        window.open(
          whatsappUrl(quoteMessage(quote)),
          "_blank",
          "noopener,noreferrer",
        );
        setReady(true);
      }}
    >
      <div className="form-grid">
        {[
          ["name", "Seu nome", "text"],
          ["quantity", "Quantidade aproximada", "number"],
        ].map(([name, label, type]) => (
          <div key={name}>
            <label htmlFor={name}>
              {label} <span>(obrigatório)</span>
            </label>
            <input
              id={name}
              name={name}
              type={type}
              min={type === "number" ? 1 : undefined}
              step={type === "number" ? 1 : undefined}
              autoComplete={name === "name" ? "name" : undefined}
              required
              maxLength={name === "name" ? 100 : undefined}
              aria-invalid={!!errors[name as keyof Quote]}
              aria-describedby={
                errors[name as keyof Quote] ? `${name}-error` : undefined
              }
            />
            {errors[name as keyof Quote] && (
              <p className="error" id={`${name}-error`}>
                {errors[name as keyof Quote]}
              </p>
            )}
          </div>
        ))}
      </div>
      <label htmlFor="service">
        Qual serviço você precisa? <span>(obrigatório)</span>
      </label>
      <select
        id="service"
        name="service"
        required
        aria-invalid={!!errors.service}
        aria-describedby={errors.service ? "service-error" : undefined}
      >
        <option value="">Selecione um serviço</option>
        {services.map((s) => (
          <option key={s.id}>{s.title}</option>
        ))}
      </select>
      {errors.service && (
        <p id="service-error" className="error">
          {errors.service}
        </p>
      )}
      <label htmlFor="organization">
        Escola ou empresa <span>(opcional)</span>
      </label>
      <input id="organization" name="organization" maxLength={150} />
      <label htmlFor="description">
        Conte um pouco sobre sua solicitação <span>(obrigatório)</span>
      </label>
      <textarea
        id="description"
        name="description"
        rows={5}
        required
        maxLength={2000}
        placeholder="Descreva a peça, o ajuste ou o modelo de uniforme que você precisa."
        aria-invalid={!!errors.description}
        aria-describedby={errors.description ? "description-error" : undefined}
      />
      {errors.description && (
        <p className="error" id="description-error">
          {errors.description}
        </p>
      )}
      <label htmlFor="preference">Como prefere continuar a conversa?</label>
      <select id="preference" name="preference">
        <option>WhatsApp</option>
        <option>Telefone, a combinar pelo WhatsApp</option>
        <option>Presencial, a combinar pelo WhatsApp</option>
      </select>
      <p className="form-note">
        Seus dados não são armazenados neste site. A solicitação será aberta no
        WhatsApp e só será enviada quando você confirmar o envio no aplicativo.
      </p>
      <button className="button" type="submit">
        <MessageCircle size={18} aria-hidden="true" />
        Enviar pelo WhatsApp
      </button>
      <p role="status" className="form-status">
        {ready
          ? "Solicitação preparada. Confirme o envio na aba do WhatsApp. Se ela não abriu, permita pop-ups para este site e tente novamente."
          : Object.keys(errors).length
            ? "Revise os campos indicados para continuar."
            : ""}
      </p>
    </form>
  );
}
