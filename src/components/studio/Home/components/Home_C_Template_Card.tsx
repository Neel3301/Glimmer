"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/ThreeDCard";

interface Template_Card_Props {
  img: string;
  title: string;
  description: string;
}

const Home_C_Template_Card = ({
  img,
  title,
  description,
}: Template_Card_Props) => {
  return (
    <CardContainer className="inter-var lg:w-96">
      <CardBody className="group/card relative h-auto rounded-3xl border border-white/[0.2] bg-gray-900 p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1]">
        <CardItem translateZ="100" className="mb-4">
          <div className="relative">
            <Image
              src={img}
              width={700}
              height={200}
              className="h-96 rounded-xl object-cover object-top group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-100" />
        </CardItem>
        <CardItem translateZ="50" className="text-xl font-bold text-gray-100">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="mt-2 text-sm text-gray-500">
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Home_C_Template_Card;
