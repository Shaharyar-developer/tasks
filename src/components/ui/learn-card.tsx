"use client";
import { type Learn } from "@/libs/types";

import { Card, CardBody, Button } from "@nextui-org/react";

type T = Learn & {
  children: React.ReactNode;
};
export const LearnCard = ({ children, url, name }: T) => {
  return (
    <Card className="w-[95%] sm:w-[50%] md:w-[40%]">
      <CardBody className="flex-row items-center justify-between gap-4 py-2">
        <>
          <h1 className="text-2xl font-bold tracking-tighter">{name}</h1>
          <span className="h-full w-[1px] bg-foreground-300"></span>
          <p>{children}</p>
          <span className="h-full w-[1px] bg-foreground-300"></span>
          <Button variant="flat" onPress={() => (window.location.href = url)}>
            Learn More
          </Button>
        </>
      </CardBody>
    </Card>
  );
};
