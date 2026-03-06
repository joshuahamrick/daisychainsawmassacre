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
    backgroundColor: "#0d0010",
    border: "1px solid #3d0060",
    color: "#f5f0ff",
    borderRadius: "0",
    padding: "0.6rem 0.9rem",
    width: "100%",
    outline: "none",
    fontFamily: "var(--font-courier), 'Courier New', Courier, monospace",
    fontSize: "0.85rem",
  };

  const labelStyle = {
    fontSize: "0.68rem",
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
    color: "#8855aa",
    fontFamily: "var(--font-courier), 'Courier New', monospace",
  };

  if (status === "success") {
    return (
      <div
        style={{
          padding: "2rem",
          border: "1px solid #ff00cc",
          backgroundColor: "#100018",
          textAlign: "center",
          boxShadow: "0 0 24px rgba(255, 0, 204, 0.3)",
          maxWidth: "600px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-boogaloo), 'Arial Black', sans-serif",
            fontSize: "1.6rem",
            color: "#ff00cc",
            textShadow: "0 0 12px #ff00cc",
            marginBottom: "0.5rem",
          }}
        >
          ✦ Message sent ✦
        </p>
        <p
          style={{
            color: "#8855aa",
            fontFamily: "var(--font-courier), 'Courier New', monospace",
            fontSize: "0.85rem",
          }}
        >
          Thank you — I&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "600px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <label style={labelStyle}>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          style={fieldStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#ff00cc")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#3d0060")}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          style={fieldStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#ff00cc")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#3d0060")}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <label style={labelStyle}>Subject</label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          style={{ ...fieldStyle, appearance: "none", cursor: "pointer" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#ff00cc")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#3d0060")}
        >
          <option value="" disabled>
            Select a subject
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s} style={{ backgroundColor: "#180025" }}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <label style={labelStyle}>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Your message..."
          style={{ ...fieldStyle, resize: "vertical" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#ff00cc")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#3d0060")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          backgroundColor: "transparent",
          color: status === "sending" ? "#8855aa" : "#ff00cc",
          border: `1px solid ${status === "sending" ? "#3d0060" : "#ff00cc"}`,
          padding: "0.75rem 2rem",
          fontSize: "0.7rem",
          letterSpacing: "3px",
          textTransform: "uppercase",
          cursor: status === "sending" ? "not-allowed" : "pointer",
          fontFamily: "var(--font-courier), 'Courier New', monospace",
          alignSelf: "flex-start",
          boxShadow: status === "sending" ? "none" : "0 0 10px rgba(255, 0, 204, 0.25)",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          if (status !== "sending") {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "rgba(255, 0, 204, 0.12)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 0 20px rgba(255, 0, 204, 0.5)";
          }
        }}
        onMouseLeave={(e) => {
          if (status !== "sending") {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 0 10px rgba(255, 0, 204, 0.25)";
          }
        }}
      >
        {status === "sending" ? "Sending..." : "✦ Send Message ✦"}
      </button>

      {status === "error" && (
        <p
          style={{
            fontSize: "0.8rem",
            color: "#ff4466",
            fontFamily: "var(--font-courier), 'Courier New', monospace",
          }}
        >
          Something went wrong. Please try again or email directly.
        </p>
      )}
    </form>
  );
}
