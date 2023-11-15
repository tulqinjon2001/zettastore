"use client";

import { ProductType } from "@/interfaces";
import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Loading from "./Loading";

interface Props {
  product: ProductType;
  fill?: boolean;
}
const PrImage: FC<Props> = ({ product, fill }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {fill ? (
        <Image
          className={`object-contain duration-700 ease-in-out group group-hover:opacity-95 ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          src={product.image}
          alt={product.title}
          fill
          onLoadingComplete={() => setIsLoading(false)}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PrImage;
