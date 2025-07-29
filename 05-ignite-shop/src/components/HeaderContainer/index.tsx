import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import { Header } from "./styles";

export function HeaderContainer() {
  return (
    <Header>
      <Image src={logoImg} alt="" />
    </Header>
  )
}