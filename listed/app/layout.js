import "./globals.css";
import { Inter, Montserrat, Lato } from "next/font/google";
import Context from "../context/context";
import NextAuthSessionProvider from "./providers/sessionProvider";

// const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Listed",
  description: "Listed...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={montserrat.className}>
      <Context>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </Context>
      </body>
    </html>
  );
}
