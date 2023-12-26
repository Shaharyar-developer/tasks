"use client";
import type { Task } from "@/libs/types";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Divider,
} from "@nextui-org/react";
type T = Task & {
  children: React.ReactNode;
};
const TaskCard = ({ name, url, children }: T) => {
  return (
    <>
      <Card className="w-[95%] sm:w-[65%] md:w-[40%] lg:w-[25%]">
        <CardHeader className="max-w-max text-xl font-bold tracking-tighter">
          {name}
        </CardHeader>
        <Divider />
        <CardBody className="max-w-[85%] px-6 py-4 leading-7 tracking-wider">
          <>{children}</>
        </CardBody>
        <CardFooter>
          <Button
            onPress={() => (window.location.href = url)}
            className="w-full"
            variant="faded"
          >
            Visit
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export { TaskCard };
