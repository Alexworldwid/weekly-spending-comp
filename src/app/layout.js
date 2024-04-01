import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "weekly expenses chart component",
  description: "see total weekly chart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">{children}</body>
      
    </html>
  );
}
