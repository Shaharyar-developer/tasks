import ClientPage from "./client";
import { Nav } from "@/components/navbar";
export default function Page() {
  const access_key = process.env.C_LAYER_KEY!;

  return (
    <>
      <Nav />
      <ClientPage access_key={access_key} />
    </>
  );
}
