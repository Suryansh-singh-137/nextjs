import Link from "next/link";

export default function home() {
  return (
    <div className="justify-center items-center flex">
      <h1 className="bg-cyan-600 text-2xl shadow-2xl border-l-amber-600">
        Home
      </h1>
      <div className="flex justify-center items-center gap-4">
        <Link href="/signup">
          <button className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700 cursor-pointer">
            signup
          </button>
        </Link>
        <Link href="/signin">
          <button className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700">
            sign in
          </button>
        </Link>
      </div>
    </div>
  );
}
