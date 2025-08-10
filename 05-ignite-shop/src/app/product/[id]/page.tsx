import Image from "next/image";
import type { Product } from "@/app/page";
import { ImageContainer, ProductContainer, ProductDetails } from "./styles";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";

interface ProductDetails extends Product {
  description: string;
}

export default async function Product({ params }: { params: { id: string } }) {
  const { id: productId } = await params;

  const response = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = response.default_price as Stripe.Price;

  const product: ProductDetails = {
    id: response.id,
    name: response.name,
    imageUrl: response.images[0],
    price: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount! / 100),
    description: response.description ?? "",
  };

  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          src={product.imageUrl}
          width={520}
          height={480}
          alt={product.name}
          priority={true}
        />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
