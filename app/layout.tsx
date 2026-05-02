import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webhook Delivery Guarantor — Ensure Webhook Delivery with Retry Logic",
  description: "A webhook proxy service with intelligent retry logic, exponential backoff, and delivery confirmation tracking for SaaS developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="37d93522-af06-4508-92e1-8723cafbcf88"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
