import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div>
    <h1>This is home page.</h1>
    <Link href="/product?age=54&name=arafath">click</Link>
  </div>
  );
}
