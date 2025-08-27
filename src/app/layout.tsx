import "./globals.css";
import { useEffect } from "react";

// Start scheduler on server only once
if (typeof window === "undefined") {
  let schedulerStarted = false;

  if (!schedulerStarted) {
    import("../utils/scheduler").then(({ startScheduler }) => {
      startScheduler();
      schedulerStarted = true;
    });
  }
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
