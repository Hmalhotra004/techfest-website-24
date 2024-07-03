"use client";
import { useEffect, useState } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <>
      {loading && (
        <>
          <h1>hello</h1>
        </>
      )}
    </>
  );
}
