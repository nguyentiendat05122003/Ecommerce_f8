import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import localFont from "next/font/local";

const archivo = localFont({
  src: [
    {
      path: "./fonts/archivo/Archivo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/archivo/Archivo-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/archivo/Archivo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-archivo",
});
const archivoSemiExpanded = localFont({
  src: [
    {
      path: "./fonts/archivo/Archivo_SemiExpanded-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/archivo/Archivo_SemiExpanded-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/archivo/Archivo_SemiExpanded-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-archivoSemiExpanded",
});

export const metadata = {
  title: "Create Next App",
  description: "test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable} ${archivoSemiExpanded.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
