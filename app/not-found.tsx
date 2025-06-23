"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          router.push("/");
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="error">
      <h1>404 - Сторінку не знайдено</h1>
      <p>Вас буде перенаправлено на головну через {count} секунд…</p>
    </div>
  );
};

export default NotFound;
