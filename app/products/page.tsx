import Link from "next/link";

export default function Page() {
  const products = [
    {
      id: "1",
      name: "mobil3e",
      price: 500,
    },
    {
      id: "2",
      name: "mob5ile",
      price: 500,
    },
    {
      id: "3",
      name: "mob4ile",
      price: 500,
    },
    {
      id: "4",
      name: "mo3bile",
      price: 500,
    },
  ];
  return (
    <div>
      Products
      <div>
        {products.map((product) => (
          <div key={product.id}>
            name : {product.name}
            price :{product.price}
            <Link href={`/products/${product.id}`}>detais</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
