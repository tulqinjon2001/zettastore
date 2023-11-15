import * as React from "react";
import Product from "@/components/Product";
import { ProductType } from "@/interfaces";
import Image from "next/image";
import Hero from "@/components/Hero";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();
  console.log(products);

  return (
    <main className="mt-20 min-h-screen max-w-7xl mx-auto px-8 xl:px-0">
      <Hero />
      <section className="flex flex-col space-y-12">
        <h1 className="text-5xl font-bold text-center">Diyor Shop Deals</h1>
        <div className="grid gap-y-10 gap-x-6 xl:gap-x-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((pr) => {
            return <Product key={pr.id} product={pr} />;
          })}
        </div>
      </section>
    </main>
  );
}
