"use client";
import { ReactNode } from "react";
import { useState } from "react";
import { Title } from "@/components/title/title";

export default function AboutLayout({ children }: { children: ReactNode }) {
  const [num, updateNum] = useState(0);

  return (
    <section className="about-section" id="about">
      {children}
      <Title as="h2">{num}</Title>
      <button onClick={() => updateNum((prev) => prev + 1)}>+ 1</button>
    </section>
  );
}
