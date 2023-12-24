import ClientPage from "./client";
export default function Page() {
  const access_key = process.env.C_LAYER_KEY!;

  return (
    <>
      <ClientPage access_key={access_key} />
    </>
  );
}
