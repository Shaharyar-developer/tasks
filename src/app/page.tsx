import { Nav } from "@/components/navbar";
import { Divider } from "@nextui-org/react";
import Tasks from "@/components/tasks";
import Learn from "@/components/learn";
export default function HomePage() {
  return (
    <>
      <Nav />
      <Tasks />
      <Divider className="mt-12" />
      <Learn />
    </>
  );
}
