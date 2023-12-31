import React from 'react'
import Image from "next/image";

type Props = {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  blur?: number;
}

// const imageKitLoader = ({ src, width, quality }) => {
//   'use server'
//   if(src[0] === "/") src = src.slice(1);
//   const params = [`w-${width}`];
//   if (quality) {
//     params.push(`q-${quality}`);
//   }
//   const paramsString = params.join(",");
//   var urlEndpoint = "https://ik.imagekit.io/gps";
//   if(urlEndpoint[urlEndpoint.length-1] === "/") urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
//   return `${urlEndpoint}/${src}?tr=${paramsString}`
// }

export default function ImageKit({ width, height, src, alt, blur, ...props }: Props & React.ImgHTMLAttributes<HTMLImageElement>) {
  if (!src) {
    throw new Error(`The "src" prop is required for the Image component`);
  }
  if (!alt) {
    throw new Error(`The "alt" prop is required for the Image component`);
  }
  if (!width) {
    width = 0;
  }
  if (!height) {
    height = 0;
  }
  if (typeof src !== "string") {
    console.log(src);
    throw new Error(
      `The "src" prop provided to Image is not a string. Received ${typeof src}`
    );
  }
  if (typeof width !== "number") {
    throw new Error(
      `The "width" prop provided to Image is not a number. Received ${typeof width}`
    );
  }
  if (typeof height !== "number") {
    throw new Error(
      `The "height" prop provided to Image is not a number. Received ${typeof height}`
    );
  }
  if (!blur) {
    blur = 0;
  }
  return <img
    src={`https://ik.imagekit.io/gps/psogh/${src}?tr=w-${width == 0 ? 'auto' : width},h-${height == 0 ? 'auto' : height},bl-${blur}`}
    alt={alt}
    width={width}
    height={height}
    {...props}
  />
}
