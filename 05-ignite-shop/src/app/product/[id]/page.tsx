import Image from "next/image";
import type { Product } from "@/app/page";
import { ImageContainer, ProductContainer, ProductDetails } from "./styles";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";

export const revalidate = 3600; 
export const dynamicParams = true; 

interface ProductDetails extends Product {
  description: string;
}

export async function generateStaticParams() {
  // Buscar todos os produtos ou definir IDs específicos para pré-renderizar
  const response = await stripe.products.list({
    limit: 3, // Limitar para os primeiros 3 produtos, por exemplo
  });
  const products = response.data;

  
  return products.map((product) => ({ id: product.id }));
}

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
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
