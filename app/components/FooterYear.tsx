"use client";

import { useEffect, useState } from "react";

export default function FooterYear() {
  const [year, setYear] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setYear(new Date().getFullYear());
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return <>{year || ""}</>;
}
