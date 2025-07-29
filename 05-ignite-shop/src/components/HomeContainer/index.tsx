"use client";

import Image from "next/image";
import { Container, Product } from "./styles";
import shirt1 from "@/assets/shirts/1.png";
import shirt2 from "@/assets/shirts/2.png";
import shirt3 from "@/assets/shirts/3.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export function HomeContainer() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
    },
  });

  return (
    <Container ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide number-slide1">
        <Image src={shirt1} width={520} height={480} alt="Camiseta X" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide number-slide2">
        <Image src={shirt2} width={520} height={480} alt="Camiseta Y" />
        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide number-slide3">
        <Image src={shirt3} width={520} height={480} alt="Camiseta Z" />
        <footer>
          <strong>Camiseta Z</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </Container>
  );
}
