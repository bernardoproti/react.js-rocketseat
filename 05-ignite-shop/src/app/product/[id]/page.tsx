'use client';
import { useParams } from "next/navigation";

export default function Product() {
  const params = useParams();

  return (
    <h1>Product: {params.id}</h1>
  );
}