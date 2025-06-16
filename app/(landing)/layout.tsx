
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BatirDemain",
  description: "Entreprise de BTP – Construisons ensemble demain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans">{children}</body>
    </html>
  );
}
