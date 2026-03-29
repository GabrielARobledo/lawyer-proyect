"use client";

import { useState } from "react";
import { ContactMessage } from "@/lib/contact";
import { NextRequest, NextResponse } from "next/server";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const message = new ContactMessage(formData.name, formData.email, formData.message);
    const validationErrors = message.validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch(`${window.location.origin}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Lee respuesta sin asumir JSON
      const text = await res.text();

      if (!res.ok) {
        throw new Error(text || "Error al enviar mensaje");
      }

      const data = JSON.parse(text); // si res.ok, parseamos JSON
      alert(data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      alert(`Ocurrió un error: ${err.message}`);
      console.error(err);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        className={`p-3 rounded bg-gray-800 ${errors.name ? "border-2 border-red-500" : ""}`}
      />
      {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className={`p-3 rounded bg-gray-800 ${errors.email ? "border-2 border-red-500" : ""}`}
      />
      {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

      <textarea
        name="message"
        placeholder="Tu consulta"
        value={formData.message}
        onChange={handleChange}
        rows={6}
        className={`p-3 rounded bg-gray-800 ${errors.message ? "border-2 border-red-500" : ""}`}
      />
      {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

      <button type="submit" className="bg-white text-black py-3 rounded hover:bg-gray-200 transition">
        Enviar consulta
      </button>
    </form>
  );
}