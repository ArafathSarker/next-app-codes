import type { Metadata } from "next";
export const metadata: Metadata = {
  title : "This is page",
  
}
export default function Home() {
  return (
    <div>
      <h1>This is home page.</h1>
    </div>
  );
}
