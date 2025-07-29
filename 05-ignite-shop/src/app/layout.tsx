import "./globals.css";
import { getCssText } from "@/styles";
import { Container, globalStyles } from "@/styles/global";
import { Roboto } from "next/font/google";
import { HeaderContainer } from "@/components/HeaderContainer";

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
        <Container>
          <HeaderContainer />
          {children}
        </Container>
      </body>
    </html>
  );
}