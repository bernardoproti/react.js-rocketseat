import { styled } from "@/styles";
import Image from "next/image";
import logoImg from "@/assets/logo.svg";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
})

const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
})

export function HeaderContainer() {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
    </Container>
  )
}