import "./globals.css";


export const metadata = {
  title: "AI Assistant",
  description: "An app to access the AI Assistant model",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
