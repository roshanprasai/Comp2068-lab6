'use client';
import { useState } from "react";

export default function Home() {
  const year: number = 2026;

  // numeric state var with setter.  value persists on re-render
  const [counter, setCounter] = useState<number>(0);

  return (
    <main>
       <h1>Node Flix</h1>
      <p>We are building this for C0MP2068 in Winter {year}.</p>
      <button onClick={(e) => setCounter(counter +1)}>Click Me</button>
      <p>You&apos;ve clicked {counter} times.</p>
    </main>
  );
}
