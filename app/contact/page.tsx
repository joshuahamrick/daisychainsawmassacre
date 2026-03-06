import { Suspense } from "react";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact — daisychainsawmassacre",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <PageHeader
        title="Contact"
        subtitle="Commissions, collaborations, and general enquiries welcome."
      />

      <Suspense fallback={<div style={{ color: "#6B6B6B" }}>Loading…</div>}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
