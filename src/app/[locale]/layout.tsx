import type { Metadata } from "next";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Locale } from "@/i18n/routing";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Lina Marija",
  description:
    "A cozy wooden cabin in nature, perfect for a peaceful getaway or weekend retreat."
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale as Locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans?.variable ?? ""} ${geistMono?.variable ?? ""}`}
      >
        <NextIntlClientProvider>
          <main className={`${styles.main} ${styles["layout-1900"]}`}>
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans?.variable ?? ""} ${geistMono?.variable ?? ""}`}
//       >
//         <main className={`${styles.main} ${styles["layout-1900"]}`}>
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }
