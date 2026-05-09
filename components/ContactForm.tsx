"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { ContactMessage } from "@/lib/contact";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setStatus("idle");
    setFeedback("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const message = new ContactMessage(
      formData.name,
      formData.email,
      formData.message,
    );
    const validationErrors = message.validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || "Error al enviar mensaje");
      }

      setStatus("success");
      setFeedback(data?.message || "Consulta enviada correctamente.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof Error
          ? err.message
          : "Ocurrió un error al enviar la consulta.",
      );
    }
  };

  const fieldClass =
    "w-full rounded-2xl border border-white/16 bg-[#101413]/72 px-4 py-3 text-white shadow-inner shadow-black/10 placeholder:text-white/50 outline-none transition hover:border-white/26 focus:border-[#d6b56f] focus:bg-[#101413]/86 focus:ring-4 focus:ring-[#d6b56f]/14";

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className={`${fieldClass} ${errors.name ? "border-red-400" : ""}`}
        />
        {errors.name && <p className="mt-2 text-sm text-red-300">{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={`${fieldClass} ${errors.email ? "border-red-400" : ""}`}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-300">{errors.email}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Contame brevemente tu consulta"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`${fieldClass} resize-none ${errors.message ? "border-red-400" : ""}`}
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-300">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d6b56f] px-5 py-3 font-semibold text-[#101413] shadow-[0_18px_45px_rgba(214,181,111,0.24)] transition hover:-translate-y-0.5 hover:bg-[#f0cf89] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={18} />
        {status === "sending" ? "Enviando..." : "Enviar consulta"}
      </button>

      {feedback && (
        <p
          className={`rounded-2xl px-4 py-3 text-sm ${
            status === "success"
              ? "bg-emerald-400/12 text-emerald-100"
              : "bg-red-400/12 text-red-100"
          }`}
        >
          {feedback}
        </p>
      )}
    </form>
  );
}
