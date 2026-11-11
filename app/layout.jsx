import "./globals.css";

export const metadata = {
  title: "Navamza — Digital Products for Mobile & Web | IT Services",
  description: "Navamza crafts next-generation mobile applications and high-performance cloud web platforms with precision engineering.",
  icons: {
    icon: "/assets/logo-light.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-brand-blue-100 selection:text-brand-blue-800 bg-brand-grey-50 text-brand-grey-900 min-h-screen relative">
        {/* Ambient Top Glow & Dot Pattern */}
        <div className="fixed inset-0 bg-dot-pattern opacity-40 pointer-events-none -z-10" />
        <div className="fixed top-0 left-0 right-0 h-[450px] ambient-glow-top pointer-events-none -z-10" />
        
        {children}
      </body>
    </html>
  );
}
