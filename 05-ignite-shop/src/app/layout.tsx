import { HeaderContainer } from "@/components/HeaderContainer";
import "./globals.css";
import { getCssText } from "@/styles";
import { globalStyles } from "@/styles/global";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  globalStyles();

  return (
    <html lang="en" className={roboto.className}>
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>
        <HeaderContainer />
        {children}
      </body>
    </html>
  );
}