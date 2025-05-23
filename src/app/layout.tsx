import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import Container from "./components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ApoemADay",
  description: "Poem App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-red-800 text-green`}>
        {/* Why is the css in body not applied to the components? */}
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
