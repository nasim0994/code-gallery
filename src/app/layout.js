import "./globals.css";

export const metadata = {
  title: "Code Gallery || Learn to Code",
  icons: {
    icon: "/assets/images/logo/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
