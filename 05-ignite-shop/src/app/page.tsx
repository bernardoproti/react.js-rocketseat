import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";
import { Slider } from "@/components/slider";

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

async function getShirt(): Promise<Stripe.Product[]> {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return response.data;
}

export default async function Home() {
  const stripeResponse = await getShirt();

  const products: Product[] = stripeResponse
    .map((product) => {
      const price = product.default_price as Stripe.Price;

      if (!price.unit_amount) return null;

      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
      };
    })
    .filter((p): p is Product => p !== null);

  return <Slider products={products} />;
}
