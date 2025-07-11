"use client";
import { Title } from "@/components/title/title";
import { usePathname } from "next/navigation";

export default function Page() {
  const path = usePathname();
  return (
    <>
      <Title as="h1">About Page</Title>
      <Title as="h2">Current Path: {path}</Title>
    </>
  );
}
