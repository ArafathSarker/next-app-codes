import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1>This is home page.</h1>
    <Link href="/product?age=50">click</Link>
   </div>
  );
}
