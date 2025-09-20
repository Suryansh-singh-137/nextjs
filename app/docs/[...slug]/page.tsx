import { Params } from "next/dist/server/request/params";

export default function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return <h1>{slug[0]}</h1>;
}
// if we want to show the same page in 404 pae just wrap slug with another pair of square brackets
