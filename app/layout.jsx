import "./globals.css";

export const metadata = {
  title: "SnapSell™ — By Geestablish",
  description: "AI Sales Command Center by Geestablish"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
