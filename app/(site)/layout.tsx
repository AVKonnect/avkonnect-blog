import Link from "next/link";
import "../globals.css";
import { Inter } from "next/font/google";
import { getPages } from "@/sanity/sanity-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avkonnect Blogs",
  description: "Filmmakers and media entrepreneurs forum",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-yellow-400 via-gray-900 to-blue-400 bg-clip-text text-transparent text-lg font-bold"
          >
            AVkonnect
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
