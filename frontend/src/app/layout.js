import AppProvider from "@/app/AppProvider";
import StoreProvider from "@/app/StoreProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import { cookies } from "next/headers";
import "./globals.css";

const archivo = localFont({
  src: [
    {
      path: "./assets/fonts/archivo/Archivo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/archivo/Archivo-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/fonts/archivo/Archivo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-archivo",
});
const archivoSemiExpanded = localFont({
  src: [
    {
      path: "./assets/fonts/archivo/Archivo_SemiExpanded-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./assets/fonts/archivo/Archivo_SemiExpanded-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./assets/fonts/archivo/Archivo_SemiExpanded-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-archivoSemiExpanded",
});

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable} ${archivoSemiExpanded.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AppProvider initialSessionToken={{ accessToken, refreshToken }}>
            <StoreProvider>{children}</StoreProvider>
            <Toaster />

            {/* <SlideSession /> */}
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
