import "./globals.css";
import Navbar from "./components/layout/Nav/Navbar";
import Footer from "./components/layout/Footer/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-[#0F172A]">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
