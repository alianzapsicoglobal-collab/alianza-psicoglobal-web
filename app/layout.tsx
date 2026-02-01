export const metadata = {
  title: "Alianza Psicoglobal – Expertos a tu Alcance",
  description:
    "Red internacional de psicólogos para atención psicológica ética, profesional y humana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
