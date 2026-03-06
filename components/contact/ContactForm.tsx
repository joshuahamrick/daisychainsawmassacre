"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";

const SUBJECTS = [
  "Commission",
  "Collaboration",
  "General Inquiry",
  "Press / Media",
] as const;

type Subject = (typeof SUBJECTS)[number];

interface FormState {
  name: string;
  email: string;
  subject: Subject | "";
  message: string;
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialSubject = (searchParams.get("subject") as Subject) ?? "";

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: SUBJECTS.includes(initialSubject as Subject) ? initialSubject : "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fieldStyle = {
    backgroundColor: "#1A1A1A",
    border: "1px solid #2a2a2a",
    color: "#F0EDE8",
    borderRadius: "4px",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSize: "0.9rem",
  };

  if (status === "success") {
    return (
      <div
        className="p-8 rounded-sm text-center"
        style={{ backgroundColor: "#1A1A1A", border: "1px solid #2a2a2a" }}
      >
        <p
          className="text-xl mb-2"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#C9A96E" }}
        >
          Message sent.
        </p>
        <p style={{ color: "#6B6B6B" }}>Thank you — I'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-xl">
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm tracking-wide" style={{ color: "#6B6B6B" }}>
          Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          style={fieldStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A96E")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm tracking-wide" style={{ color: "#6B6B6B" }}>
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          style={fieldStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A96E")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
        />
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm tracking-wide" style={{ color: "#6B6B6B" }}>
          Subject
        </label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          style={{ ...fieldStyle, appearance: "none", cursor: "pointer" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A96E")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
        >
          <option value="" disabled>
            Select a subject
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm tracking-wide" style={{ color: "#6B6B6B" }}>
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Your message..."
          style={{ ...fieldStyle, resize: "vertical" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A96E")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 px-8 py-3 text-sm tracking-widest uppercase transition-all self-start"
        style={{
          backgroundColor: status === "sending" ? "#2a2a2a" : "#C9A96E",
          color: "#111111",
          border: "none",
          borderRadius: "2px",
          cursor: status === "sending" ? "not-allowed" : "pointer",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontWeight: 500,
        }}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-sm" style={{ color: "#e06060" }}>
          Something went wrong. Please try again or email directly.
        </p>
      )}
    </form>
  );
}
