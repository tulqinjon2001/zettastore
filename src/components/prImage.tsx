"use client";
import { FC, useState } from "react";
import Image from "next/image";
import Loading from "./Loading";
import { Props } from "./Image";

export const prImage: FC<Props> = ({ product, fill }) => {
  const [state, setState] = useState(true);
  return (
    <>
      {fill ? (
        <Image
          className={`object-contain duration-700 ease-in-out group group-hover:opacity-75 ${isLoading}`}
          src={product.image}
          alt={product.title}
          fill
        />
      ) : (
        <Loading />
      )}
    </>
  );
};
