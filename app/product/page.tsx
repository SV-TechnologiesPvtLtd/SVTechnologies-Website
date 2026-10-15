import type { Metadata } from "next";
import InvoiceStudioPage from "@/components/sections/product-page";

export const metadata: Metadata = {
  title: "Invoice Studio — AI-Powered Invoicing | SV Technologies",
  description:
    "Invoice Studio turns natural language into finished, editable invoices. Real-time preview, team tracking, and database storage.",
  openGraph: {
    title: "Invoice Studio — AI-Powered Invoicing | SV Technologies",
    description:
      "Invoice Studio turns natural language into finished, editable invoices. Real-time preview, team tracking, and database storage.",
  },
};

export default function ProductPageRoute() {
  return <InvoiceStudioPage />;
}
