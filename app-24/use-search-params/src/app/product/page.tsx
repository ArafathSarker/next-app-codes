"use client";
import { useSearchParams } from "next/navigation";

export default function page() {
  const search =useSearchParams();
  return (
    <div>
        <h1>This is product page.{search.get("age")} and {search.get("name")}</h1>
    </div>
  )
}
