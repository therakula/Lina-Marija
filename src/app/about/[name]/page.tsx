"use client";

import { useParams, usePathname } from "next/navigation";

export default function AboutName() {
  const path = usePathname();
  const params = useParams();
  const { name } = params;
  return (
    <>
      <h1>Hello {name}</h1>
      <h2>Current Path: {path}</h2>
    </>
  );
}
