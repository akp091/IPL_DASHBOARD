import "./globals.css";

// Start scheduler on server
if (typeof window === "undefined") {
  import("../utils/scheduler").then(({ startScheduler }) => {
    startScheduler();
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
