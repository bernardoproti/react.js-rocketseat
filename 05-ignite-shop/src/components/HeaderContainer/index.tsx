import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import { Container } from "./styles";
import { Header } from "./styles";

export function HeaderContainer() {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
    </Container>
  )
}