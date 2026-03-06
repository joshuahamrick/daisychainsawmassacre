import { Suspense } from "react";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact — daisychainsawmassacre",
};

export default function ContactPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 1rem 3.5rem" }}>
      <PageHeader
        title="Contact"
        subtitle="Commissions, collaborations, and general enquiries welcome."
      />

      <Suspense fallback={<div style={{ color: "#8855aa", fontFamily: "monospace" }}>Loading…</div>}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
