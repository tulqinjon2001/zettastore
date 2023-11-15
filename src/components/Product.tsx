"use client";
import { ProductType } from "@/interfaces";
import Image from "next/image";
import PrImage from "./Image";
import Link from "next/link";
import React, { FC } from "react";

const Product: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <div className="rounded-lg p-6 group border shadow-md flex flex-col h-96 hover:scale-105 transition-transform ease-in-out duration-100">
      <Link href={`product/${product.id}`} className="max-h-72 relative flex-1">
        <PrImage product={product} fill />
      </Link>
      <h3 className="text-indigo-500 mt-4 font-medium title-font text-xs tracking-widest">
        {product.category}
      </h3>

      <div className="flex items-center justify-between mt-4 mb-1">
        <p className="font-semibold w-44 truncate">{product.title}</p>
        <p className="font-bold">${product.price}</p>
      </div>

      <p className="text-base leading-relaxed line-clamp-2">
        {product.description}
      </p>
    </div>
  );
};

export default Product;
