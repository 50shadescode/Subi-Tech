import "../index.css"; // Imports your existing Tailwind CSS rules
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Suby Tech | Robust Systems & AI Automation",
  description: "High-end software engineering, web platforms, and automated business architectures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-zinc-950 text-zinc-50 antialiased">
        {/* Global Navigation Header Header */}
        <Navbar />
        
        {/* Main Application Canvas Content */}
        {children}
      </body>
    </html>
  );
}