import {Product} from "@/app/components/product";
import { Reviews } from "@/app/components/reviews";
import { Suspense } from "react";
export default function page() {
  return (
    <>
    <h1>Product Reviews</h1>
    <Suspense fallback={<p>waiting products.......</p>}>
        <Product/>
    </Suspense>
    <Suspense fallback={<p>waiting reviews.......</p>}>
         <Reviews />
    </Suspense>

   
    </>
  )
}
