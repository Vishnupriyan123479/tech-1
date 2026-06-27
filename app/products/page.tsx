import { Suspense } from "react";
import StationeryClient from "../components/StationeryClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <StationeryClient />
    </Suspense>
  );
}